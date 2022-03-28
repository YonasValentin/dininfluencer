import React from 'react';

export default function PostCard({ influencer }) {
  return (
    <article className="post-card">
      <div className="post-card__container">
        <h5>{influencer.fullName}</h5>
        <figure className="post-card__img-wrapper">
          <img src={influencer.imageUrl}></img>
        </figure>
        <label className="post-card__followers-count-label">
          <h3 className="post-card__followers-count">
            {influencer.followersCount}
          </h3>
          Followers
        </label>
        <div className="post-card__btn-wrapper">
          <button className="post-card__favourite-btn">
            Add to favourites
          </button>
          <button className="post-card__profile-btn">View profile</button>
        </div>
      </div>
    </article>
  );
}
