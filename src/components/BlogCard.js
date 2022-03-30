import React from 'react';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card__container">
        <figure className="blog-card__image-wrapper">
          <img src={post.acf.featured_image}></img>
        </figure>
        <div className="blog-card__content-wrapper">
          <span>{post.date}</span>
          <h3>{post.title.rendered}</h3>
          <p>{post.acf.featured_text.slice(0, 300)}</p>
          <button>Read more</button>
        </div>
      </div>
    </article>
  );
}
