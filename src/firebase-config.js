import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore, collection } from 'firebase/firestore';

// firebaseConfig object copied from project in Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyBLp1E6sOXO0UOUoGPH4-uqsmpDbrixvvE',
  authDomain: 'dininfluencer-test.firebaseapp.com',
  projectId: 'dininfluencer-test',
  storageBucket: 'dininfluencer-test.appspot.com',
  messagingSenderId: '374079766467',
  appId: '1:374079766467:web:9caa7182c194dea7e24776',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const influencersRef = collection(db, 'influencers'); // reference to influencers collection i firestore

async function importData() {
  const res = await fetch('./json/dininfluencer.json');
  const data = await res.json();
  const influencers = data;
  console.log(data);

  for (const influencer of influencers) {
    console.log(influencer);

    /* await addDoc(influencersRef, influencer); */
  }
}
importData();

export const usersRef = collection(db, 'users'); // reference to users collection i firestore
