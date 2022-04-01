import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

// firebaseConfig object copied from project in Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyCKl1_RZTwEsjFKoTKzuoC1fWJSwmq4pfQ',
  authDomain: 'dininfluencer-500.firebaseapp.com',
  projectId: 'dininfluencer-500',
  storageBucket: 'dininfluencer-500.appspot.com',
  messagingSenderId: '362653794887',
  appId: '1:362653794887:web:99cc657592ff345b5b2762',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const influencersRef = collection(db, 'influencers'); // reference to influencers collection i firestore

 /*async function importData() {
  const res = await fetch(
    'https://raw.githubusercontent.com/YonasValentin/dininfluencer/master/src/json/new-profiles.json'
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
