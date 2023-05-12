import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

/*.env file imports: 
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};*/

const firebaseConfig = {
  apiKey: 'AIzaSyDcz7BvGa5NHpeZvJ43YRMmlZRzWMj17v0',
  authDomain: 'team-2-379813.firebaseapp.com',
  projectId: 'team-2-379813',
  storageBucket: 'team-2-379813.appspot.com',
  messagingSenderId: '541861266484',
  appId: '1:541861266484:web:c2a4bb6206c8a2e56bf661',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default db;
