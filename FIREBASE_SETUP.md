# Firebase Setup Guide

Firebase integration is now set up! Follow these steps to enable real-time polls:

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name (e.g., "justsquid")
4. Click "Create Project"
5. Wait for the project to be created

## Step 2: Set Up Realtime Database

1. In Firebase Console, go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose your location (pick the one closest to you)
4. Select **Start in Test Mode** (for development)
5. Click **Create**

## Step 3: Get Your Config

1. In Firebase Console, click the **Settings icon** (⚙️) → **Project Settings**
2. Scroll down to "Your apps"
3. Click the **Web icon** (`</>`) if you haven't added an app yet
4. Copy your Firebase config (it looks like the code below)

## Step 4: Update src/lib/firebase.ts

Replace the placeholder values in `src/lib/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",           // Copy from Firebase
  authDomain: "YOUR_AUTH_DOMAIN",   // Copy from Firebase
  databaseURL: "YOUR_DATABASE_URL", // Copy from Firebase (must include the URL)
  projectId: "YOUR_PROJECT_ID",     // Copy from Firebase
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 5: Security Rules (Important!)

By default, Test Mode allows anyone to read/write. To keep it secure for just your app:

1. Go to **Realtime Database** → **Rules**
2. Replace the rules with:

```json
{
  "rules": {
    "polls": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Click **Publish**

## Step 6: Test It!

1. Save the changes to `firebase.ts`
2. Restart your dev server if needed
3. Go to `http://localhost:8080/subscribers`
4. Enter password: `1353447`
5. You should see **🟢 Live** indicator instead of **⚪ Local**
6. Now polls will be real-time across all users!

## Troubleshooting

- **Still shows "⚪ Local"?** Check that your config is correct and the Database URL is included
- **Votes not syncing?** Make sure your Realtime Database rules are published
- **Firebase errors in console?** Check your config values in Firebase Console

## Notes

- Test Mode is fine for development but should be restricted for production
- All votes are public - anyone with the password can see them
- Votes are stored in your Firebase database permanently

Happy polling! 🎉
