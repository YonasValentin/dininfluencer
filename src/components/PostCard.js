import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ influencer }) {
  return (
    <article className="post-card">
      <div className="post-card__container">
        <h5>{influencer.fullName}</h5>
        <figure className="post-card__img-wrapper">
          <img src={influencer.imageUrl}></img>
        </figure>
        <h3>{influencer.followersCount}</h3>
      </div>
    </article>
  );
}
