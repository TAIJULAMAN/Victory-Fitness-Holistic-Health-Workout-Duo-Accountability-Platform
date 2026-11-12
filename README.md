<div align="center">

<!-- Hero Banner & Header Logo -->
<a href="https://github.com/iam-rajuan/victory-fitness-app">
  <img src="./assets/logo_light.png" alt="Victory Fitness Logo" width="160" />
</a>

<br />
<br />

<a id="overview"></a>

# Victory Fitness — Holistic Health, Workout & Duo Accountability Platform

**A cross-platform health & fitness ecosystem engineered with Expo SDK 54, React Native, and Zustand, integrating Apple HealthKit, Android Health Connect, AI-guided meal planning, duo workout accountability, and automated PWA deployment.**

<br />

<a id="tech-stack"></a>

<!-- Tech Stack Badges (for-the-badge style) -->

[![React Native](https://img.shields.io/badge/React%20Native%200.81-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo SDK 54](https://img.shields.io/badge/Expo%20SDK%2054-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Apple HealthKit](https://img.shields.io/badge/Apple%20HealthKit-Biometrics-000000?style=for-the-badge&logo=apple&logoColor=white)](https://developer.apple.com/healthkit/)
[![Health Connect](https://img.shields.io/badge/Health%20Connect-Android-34A853?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/health-and-fitness/guides/health-connect)
[![Zustand](https://img.shields.io/badge/Zustand-State%20Stores-4338CA?style=for-the-badge)](https://zustand.docs.pmnd.rs/)
[![Vercel PWA](https://img.shields.io/badge/Vercel-PWA%20Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](#license)

<br />

<a id="cta-links"></a>

<!-- Live Demo & CTA Links -->
<p align="center">
  <a href="#overview"><b>Explore Platform</b></a> &nbsp;•&nbsp;
  <a href="#architecture"><b>Architecture</b></a> &nbsp;•&nbsp;
  <a href="#core-features"><b>Core Features</b></a> &nbsp;•&nbsp;
  <a href="https://github.com/iam-rajuan/victory-fitness-app/issues"><b>Report Bug</b></a> &nbsp;•&nbsp;
  <a href="https://github.com/iam-rajuan/victory-fitness-app/issues"><b>Request Feature</b></a>
</p>

<br />

<!-- Hero Banner Graphic -->
<img src="./assets/images/onboarding/welcome-bg.jpg" alt="Victory Fitness Platform Overview" width="100%" />

</div>

---

## 📑 Table of Contents

- [ Title & Value Proposition](#overview)
- [ Tech Stack Badges](#tech-stack)
- [ Live Platform & CTA Links](#cta-links)
- [ Interface Preview & Onboarding Experience](#interface-preview)
- [ Core Features & Platform Modules](#core-features)
  - [ Duo Partner Workouts & Social Accountability](#duo-accountability)
  - [ Apple HealthKit & Android Health Connect Biometrics](#health-sync)
  - [ Interactive Workout Planner & Video Wizards](#workout-plans)
  - [ Smart Meal Planning & Macro Journaling](#nutrition-mealplans)
  - [ Community Fitness Challenges & Leaderboards](#challenges-leaderboards)
  - [ Biometric Security & Native Audio Coaching](#security-audio)
  - [ Progressive Web App (PWA) & Vercel Deployment](#pwa-vercel)
- [ Engineering Highlights & Architecture](#architecture)
  - [ System Architecture Overview](#system-architecture)
  - [ Platform Role & Capability Matrix](#capability-matrix)
- [ Project Directory Structure](#project-structure)
- [ Local Development & Setup](#local-setup)
- [ Developer Info & Socials](#developer-info)
- [ License & Proprietary Notice](#license)

---

<a id="interface-preview"></a>

## 🖼️ Interface Preview & Onboarding Experience

Discover role-tailored fitness journeys, biometric data synchronization, and social challenge leaderboards engineered with Expo SDK 54, React Native Web, and Zustand.

|                                **Precision Tracking & Biometrics**                                |                                    **Performance First Training**                                  |
| :------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| <img src="./assets/images/onboarding/precision-tracking.png" alt="Precision Tracking" width="480" /> | <img src="./assets/images/onboarding/performance-first.png" alt="Performance First" width="480" />   |
|                    _Real-time HealthKit steps, active calories & heart rate monitoring_            |                        _Targeted strength wizards, rep logging & rest timers_                      |

|                                 **Stronger Together: Duo Mode**                                    |                                    **Official Brand Identity**                                     |
| :------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| <img src="./assets/images/onboarding/stronger-together.png" alt="Duo Workouts" width="480" />        |        <img src="./assets/logo_light.png" alt="Victory Fitness Official Logo" width="280" />       |
|                  _Accountability partner matching, duo workouts & mutual motivation_               |                     _Modern athletic branding optimized for mobile and web PWA_                    |

---

<a id="core-features"></a>

## ✨ Core Features & Platform Modules

Victory Fitness unites physical training, nutrition science, and peer accountability into an integrated lifestyle platform.

<a id="duo-accountability"></a>

### **Duo Partner Workouts & Social Accountability**

- **Duo Mode (`/duo`)**: Match with workout partners sharing identical fitness goals, schedules, and training intensities.
- **Mutual Streak Accountability**: Sync daily completion statuses; receive motivational alerts when your partner completes their workout.
- **In-App Training Chat (`/chat`)**: Direct messaging between accountability partners to coordinate gym sessions, share nutrition logs, and celebrate personal records.

<a id="health-sync"></a>

### **Apple HealthKit & Android Health Connect Biometrics**

- **Native HealthKit Integration (`react-native-health`)**: Two-way synchronization on iOS for resting heart rate, active calories burned, step counts, and distance walked.
- **Android Health Connect (`react-native-health-connect`)**: Modern Google Health Connect API support ensuring unified metric storage on Android devices.
- **Passive Background Logging**: Automatically populates daily activity dashboards without requiring manual input.

<a id="workout-plans"></a>

### **Interactive Workout Planner & Video Wizards**

- **Strength Wizard (`strength-wizard.tsx`)**: Step-by-step setup tailoring sets, reps, weight loads, and progressive overload parameters.
- **Video Plan Wizard (`video-wizard.tsx`)**: High-definition video coaching with interactive exercise walkthroughs, muscle group focus tags, and form tips.
- **Categorized Workout Library (`/workout-library`)**: Extensive repository of exercises sorted by muscle group (Chest, Back, Legs, Shoulders, Core) and equipment availability.

<a id="nutrition-mealplans"></a>

### **Smart Meal Planning & Macro Journaling**

- **Personalized Meal Plans (`/mealPlan`)**: Caloric intake distribution customized according to user baseline metabolic rates and target goals.
- **Daily Nutrition Journal (`/journal`)**: Log daily meals, calculate net carbs, proteins, fats, and water hydration levels.
- **Macro Summary Visualizer**: Real-time progress bars illustrating daily consumption versus prescribed nutritional targets.

<a id="challenges-leaderboards"></a>

### **Community Fitness Challenges & Leaderboards**

- **Community Challenges (`/challenges`)**: Join competitive monthly challenges (e.g., 30-Day Core, 100km Run Challenge).
- **Dynamic Leaderboards**: Real-time rank progression based on verified workout completions and HealthKit data.
- **Challenge Discussion Hub (`/challenges/chat`)**: Dedicated community boards to exchange encouragement, tips, and victory milestones.

<a id="security-audio"></a>

### **Biometric Security & Native Audio Coaching**

- **Biometric Security (`biometricUnlock.ts`)**: Secure app access via Apple Face ID, Touch ID, or Android Biometrics via `expo-local-authentication`.
- **Audio Coaching & Rest Timers (`restTimerAudio.ts`)**: Built-in audio cues signaling rest period expirations and next exercise intervals using `expo-audio`.

<a id="pwa-vercel"></a>

### **Progressive Web App (PWA) & Vercel Deployment**

- **Cross-Platform Web Export**: Static web compilation via `npm run build:web` with automatic service worker registration and web push notifications.
- **Optimized PWA Shell**: Fully responsive Progressive Web App deployable to Vercel with seamless client-side SPA routing (`vercel.json`).

---

<a id="architecture"></a>

## 🏗️ Engineering Highlights & Architecture

<a id="system-architecture"></a>

### System Architecture Overview

Victory Fitness bridges native iOS/Android mobile runtimes and modern web browsers through a unified Expo codebase powered by Zustand stores.

```
+-----------------------------------------------------------------------------------+
|                        Client Layer (React Native / Expo SDK 54)                  |
|   Expo Router v6 │ React 19 │ TypeScript │ Zustand Stores │ React Native Web      |
+-----------------------------------------------------------------------------------+
                         │                                    │
          ┌──────────────┴──────────────┐      ┌──────────────┴──────────────┐
          ▼                             ▼      ▼                             ▼
+-------------------+         +-------------------+         +-------------------+
|  Health Sync API  |         |  Device Hardware  |         | Deployment / PWA  |
|  Apple HealthKit  |         | Biometrics/FaceID |         | Vercel SPA Export |
|  Health Connect   |         | Expo Audio Engine |         | Service Worker SW |
| Steps & Calories  |         | Push Notifications|         | Web Push Engine   |
+-------------------+         +-------------------+         +-------------------+
                         │                                    │
                         ▼                                    ▼
+-----------------------------------------------------------------------------------+
|                        Backend & Cloud API Integration Layer                      |
|   RESTful Endpoints │ JWT Bearer Auth │ Duo WebSockets │ Firebase Cloud Messaging |
+-----------------------------------------------------------------------------------+
```

<a id="capability-matrix"></a>

### Platform Role & Capability Matrix

| Feature / Domain             | Free Member | Premium Athlete | Workout Duo | Admin Staff |
| :--------------------------- | :---------: | :-------------: | :---------: | :---------: |
| **Basic Workout Library**    | Full Access |   Full Access   | Full Access | Full Access |
| **HealthKit / Health Connect**| Full Access |   Full Access   | Full Access | Full Access |
| **Strength & Video Wizards** | 2 Plans Max |    Unlimited    |  Unlimited  | Full Access |
| **Duo Partner Matching**     |      ❌     |   Full Access   | Full Access | Full Access |
| **Community Challenges**     | Join Public |   Join & Create | Join & Create| Full Access|
| **Biometric FaceID Unlock**  | Full Access |   Full Access   | Full Access | Full Access |
| **Challenge Administration** |      ❌     |        ❌       |      ❌     | Full Access |
| **Global Analytics**         |      ❌     |        ❌       |      ❌     | Full Access |

---

<a id="project-structure"></a>

## 📂 Project Directory Structure

```plaintext
victory-fitness-app/
├── app/                                # Expo Router v6 file-based application routes
│   ├── (auth)/                         # Authentication flows (Login, Register, Forgot Password)
│   ├── (tabs)/                         # Main bottom tab navigators
│   │   ├── index.tsx                   # Home dashboard: Daily summary, biometrics & activity
│   │   ├── workout.tsx                 # Workout execution screen & active session timers
│   │   ├── mealPlan.tsx                # Nutrition target view & daily meal logs
│   │   ├── challenge.tsx               # Active community challenges & leaderboards
│   │   ├── profile.tsx                 # Athlete profile, achievements & biometric settings
│   │   └── _layout.tsx                 # Bottom tab bar configuration & iconography
│   ├── admin/                          # Administrative portal (Challenge & content CMS)
│   ├── challenges/                     # Challenge details, group chat & participant progress
│   ├── chat/                           # In-app real-time messaging with accountability partners
│   ├── duo/                            # Duo workout partner finder & accountability hub
│   ├── journal/                        # Daily fitness, mood, water & measurement logging
│   ├── mealPlan/                       # Comprehensive recipe catalog & personalized meal builder
│   ├── onboard/                        # Multi-step onboarding questionnaire & goal setup
│   ├── profile/                        # Account credentials, connected devices & subscriptions
│   ├── workout-library/                # Categorized exercise library with muscle group filters
│   ├── workoutplan/                    # Custom workout creator, strength wizard & video wizard
│   ├── _layout.tsx                     # Root app layout, providers, fonts & auth gates
│   └── +html.tsx                       # Custom HTML shell for web export & PWA meta tags
├── assets/                             # High-resolution logos, workout imagery & audio files
│   ├── images/
│   │   └── onboarding/                 # Onboarding illustrations (Precision tracking, Duo mode)
│   ├── sounds/                         # Rest timer audio alerts & countdown sound effects
│   ├── logo_dark.png                   # Dark theme brand logo
│   └── logo_light.png                  # Light theme brand logo
├── components/                         # Atomic and feature-specific React Native components
│   ├── cards/                          # Exercise, nutrition & challenge presentation cards
│   ├── layout/                         # Safe area containers, headers & navigation bars
│   └── ui/                             # Buttons, inputs, modals & biometric prompts
├── constants/                          # Theme colors, typography rules & spacing constants
├── context/                            # React Context providers (ThemeContext)
├── hooks/                              # Custom React hooks (useHealthSync, useAuth, useDuo)
├── lib/                                # Core domain logic, utilities & data stores
│   ├── stores/                         # Zustand state stores (UserStore, WorkoutStore, NutritionStore)
│   ├── translations/                   # Multilingual translation dictionaries
│   ├── api.ts                          # Centralized API service & HTTP client
│   ├── biometricUnlock.ts              # Face ID & Touch ID local authentication logic
│   ├── nativeHealthSync.ts             # Apple HealthKit & Android Health Connect bridge
│   ├── restTimerAudio.ts               # Background audio interval player
│   └── webServiceWorker.ts             # PWA service worker lifecycle manager
├── public/                             # Static PWA web assets (manifest.json, icons, worker scripts)
├── scripts/                            # Build automation & web export optimization scripts
├── app.json                            # Expo manifest configuration (Bundle IDs, permissions, PWA)
├── Dockerfile                          # Containerized web deployment configuration
├── eas.json                            # EAS Build profiles for iOS, Android & web releases
├── package.json                        # Project dependencies, scripts & metadata
├── tsconfig.json                       # TypeScript compiler configuration & path aliases
├── vercel.json                         # Vercel deployment configuration & SPA rewrite rules
└── README.md                           # Comprehensive documentation & platform guide
```

---

<a id="local-setup"></a>

## 💻 Local Development & Setup

### Prerequisites

- **Node.js**: v20 LTS or later
- **JDK 17**: Required for Android native builds
- **Xcode & CocoaPods**: macOS only (for iOS native run)
- **Android Studio & SDK**: Configured with `ANDROID_HOME`

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iam-rajuan/victory-fitness-app.git
   cd victory-fitness-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Define your backend endpoint:
   ```env
   EXPO_PUBLIC_API_URL=https://api.victoryfitness.example.com
   ```

4. **Launch Application:**
   ```bash
   npx expo run:android         # Launch on Android device / emulator
   npx expo run:ios             # Launch on iOS simulator (macOS only)
   npm run web                  # Launch local web development server
   ```

5. **Build for Vercel (PWA Export):**
   ```bash
   npm run build:web
   ```

---

<a id="developer-info"></a>

## 👨‍💻 Developer Info & Socials

Victory Fitness is designed, engineered, and maintained by experienced full-stack and mobile software engineers.

- **Md. Rajuan Hossen** — _Lead Mobile & Full-Stack Software Engineer_
  - 🌐 GitHub: [@iam-rajuan](https://github.com/iam-rajuan)
  - 📧 Email: [rajuan.official@gmail.com](mailto:rajuan.official@gmail.com)

---

<a id="license"></a>

## 📄 License & Proprietary Notice

Copyright © 2026 Victory Fitness. All rights reserved.

This software, including its mobile applications, algorithms, training regimens, and proprietary design system, is private and confidential. Unauthorized copying, distribution, decompilation, or commercial exploitation without prior written consent from Victory Fitness is strictly prohibited.

<div align="center">
  <b>Built with ❤️ to elevate personal fitness, athletic performance, and accountability</b>
</div>
