import { useState, useEffect } from 'react';
import React from 'react';
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

      const filterFollowersFrom = sessionStorage.getItem('followersFromValue');
      console.log(filterFollowersFrom);
      const filterFollowersTo = sessionStorage.getItem('followersToValue');
      console.log(filterFollowersTo);

      const filteredData = influencerData.filter(
        (influencer) =>
          influencer.followersCount >= filterFollowersFrom &&
          influencer.followersCount <= filterFollowersTo
      );
      console.log(filteredData);
      setInfluencers(filteredData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <main className="influencer-overview">
      <div className="influencer-overview__container">
        <article className="influencer-overview__influencer-cards">
          {influencers.map((influencer) => (
            <PostCard influencer={influencer} key={influencer.id} />
          ))}
        </article>
      </div>
    </main>
  );
}
