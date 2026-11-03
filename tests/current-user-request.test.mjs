import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';
import test from 'node:test';

// Execute the production function with controlled transport/storage boundaries.
// This avoids importing React Native into Node and lets requests remain pending.
const source = readFileSync(new URL('../lib/api.ts', import.meta.url), 'utf8');
const start = source.indexOf('export async function fetchCurrentUser(');
const end = source.indexOf('\nexport type AppNotification', start);
const functionSource = stripTypeScriptTypes(source.slice(start, end).replace('export ', ''));
function setup() {
  const pending = [];
  const state = {
    authUser: null, authUserLoaded: false, currentUserFetchedAt: 0,
    currentUserRequestPromise: null, CURRENT_USER_CACHE_TTL_MS: 30000,
    getValidAuthTokens: async () => ({ access_token: 'test' }),
    ApiError: Error, getAuthUserScopedKey: () => '',
    normalizeAuthUser: user => user, clearBodyMetricsCache: () => {},
    persistAuthUser: async () => {},
    apiRequest: () => new Promise((resolve, reject) => pending.push({ resolve, reject })),
  };
  vm.createContext(state);
  vm.runInContext(functionSource, state);
  return { state, pending, fetch: state.fetchCurrentUser };
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test('simultaneous forced and ordinary profile reads share one network request', async () => {
  const h = setup();
  const reads = [h.fetch({ forceRefresh: true }), h.fetch({ forceRefresh: true }), h.fetch()];
  await tick();
  assert.equal(h.pending.length, 1);
  h.pending[0].resolve({ id: 'user' });
  assert.deepEqual(await Promise.all(reads), [{ id: 'user' }, { id: 'user' }, { id: 'user' }]);
});

test('force refresh still fetches after settlement while an ordinary read uses the cache', async () => {
  const h = setup(); const first = h.fetch(); await tick();
  h.pending[0].resolve({ id: 'user', subscription_status: 'ACTIVE' }); await first;
  await h.fetch(); assert.equal(h.pending.length, 1);
  const refresh = h.fetch({ forceRefresh: true }); await tick();
  assert.equal(h.pending.length, 2);
  h.pending[1].resolve({ id: 'user', subscription_status: 'EXPIRED' });
  assert.equal((await refresh).subscription_status, 'EXPIRED');
});

test('failed profile request releases the pending request for retry', async () => {
  const h = setup(); const first = h.fetch();
  const rejection = assert.rejects(first, /unavailable/);
  await tick(); h.pending[0].reject(new Error('unavailable')); await rejection;
  const retry = h.fetch(); await tick(); assert.equal(h.pending.length, 2);
  h.pending[1].resolve({ id: 'user' }); await retry;
});

test('an older request finishing does not clear a newer pending request', async () => {
  const h = setup(); const first = h.fetch(); await tick();
  h.state.currentUserRequestPromise = null; // Explicit cache invalidation during a mutation.
  const second = h.fetch({ forceRefresh: true }); await tick();
  h.pending[0].resolve({ id: 'user' }); await first;
  const third = h.fetch({ forceRefresh: true }); await tick();
  assert.equal(h.pending.length, 2);
  h.pending[1].resolve({ id: 'user', subscription_status: 'ACTIVE' });
  await Promise.all([second, third]);
});
