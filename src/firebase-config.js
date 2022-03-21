import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// firebaseConfig object copied from project in Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyDWuZHP8CJtG3EqtHYcvnaKXsMQxxKfENE',
  authDomain: 'dininfluencer-9730c.firebaseapp.com',
  projectId: 'dininfluencer-9730c',
  storageBucket: 'dininfluencer-9730c.appspot.com',
  messagingSenderId: '888887205865',
  appId: '1:888887205865:web:705ee6e1d18ba67d347578',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const influencersRef = collection(db, 'influencers'); // reference to influencers collection i firestore

export const usersRef = collection(db, 'users'); // reference to users collection i firestore
