import React from 'react';

export default function BlogCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-card__container">
        <p>{post.date}</p>
        <h3>{post.title.rendered}</h3>
        <p>{post}</p>
      </div>
    </article>
  );
}
