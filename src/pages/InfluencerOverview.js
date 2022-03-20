import { useState, useEffect } from 'react';
import { onSnapshot, query, orderBy } from 'firebase/firestore';
import { influencersRef } from '../firebase-config';
import PostCard from '../components/PostCard';

export default function HomePage() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const q = query(influencersRef, orderBy('bio', 'isPrivate')); // order by: lastest post first
    const unsubscribe = onSnapshot(q, (data) => {
      const influencerData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setInfluencers(influencerData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="page">
      <section className="grid-container">
        {influencers.map((influencer) => (
          <PostCard post={influencer} key={influencer.id} />
        ))}
      </section>
    </section>
  );
}
