import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ influencer }) {
  return (
    <article>
      <h5>{influencer.fullName}</h5>
      <h2>{influencer.bio}</h2>
      <h2>{influencer.isPrivate}</h2>
      <img src={influencer.imageUrl}></img>
      <h3>{influencer.followersCount}</h3>
    </article>
  );
}
