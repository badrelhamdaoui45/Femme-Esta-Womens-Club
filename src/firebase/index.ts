import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from './config';
import { useUser } from './auth/use-user';
import {
  useAuth,
  useFirebaseApp,
  useFirestore,
  FirebaseProvider,
} from './provider';

function initializeFirebase() {
  const isInitialized = getApps().length > 0;
  const app = isInitialized ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return { app, auth, firestore };
}

export {
  initializeFirebase,
  useUser,
  useAuth,
  useFirebaseApp,
  useFirestore,
  FirebaseProvider,
};
