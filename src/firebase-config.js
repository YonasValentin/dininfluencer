import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

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

async function getInfluencers(db) {
  const influencerCol = collection(db, 'influencerList');
  const influencerSnapshot = await getDocs(influencerCol);
  const influencerList = influencerSnapshot.docs.map((doc) => doc.data());
  return influencerList;
}
console.log(getInfluencers(db));

export const usersRef = collection(db, 'users'); // reference to users collection i firestore
