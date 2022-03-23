import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

// firebaseConfig object copied from project in Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyDWuZHP8CJtG3EqtHYcvnaKXsMQxxKfENE',
  authDomain: 'dininfluencer-9730c.firebaseapp.com',
  databaseURL:
    'https://dininfluencer-9730c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dininfluencer-9730c',
  storageBucket: 'dininfluencer-9730c.appspot.com',
  messagingSenderId: '888887205865',
  appId: '1:888887205865:web:705ee6e1d18ba67d347578',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const influencersRef = collection(db, 'influencers'); // reference to influencers collection i firestore

/* async function importData() {
  const res = await fetch(
    'https://raw.githubusercontent.com/YonasValentin/dininfluencer/master/src/json/dininfluencer.json'
  );
  const data = await res.json();
  const influencers = data.influencerList;
  console.log(data);

  for (const influencer of influencers) {
    console.log(influencer);

    await addDoc(influencersRef, influencer);
  }
}
importData(); */

export const usersRef = collection(db, 'users'); // reference to users collection i firestore
