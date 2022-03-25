import React from 'react';

export default function BlogCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-card__container">
        <span>{post.date}</span>
        <h3>{post.title.rendered}</h3>
        <span>{post.date}</span>
      </div>
    </article>
  );
}
