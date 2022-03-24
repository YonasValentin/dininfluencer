import { useState, useEffect } from 'react';
import { onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { influencersRef } from '../firebase-config';
import PostCard from '../components/PostCard';

export default function InfluencerOverview() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const q = query(influencersRef, limit(10)); // order by: lastest post first
    const unsubscribe = onSnapshot(q, (data) => {
      const influencerData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(influencerData);
      setInfluencers(influencerData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <section className="page">
      <section className="grid-container">
        {influencers.map((influencer) => (
          <PostCard influencer={influencer} key={influencer.id} />
        ))}
      </section>
    </section>
  );
}
