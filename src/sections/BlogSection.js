import React, { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Axios from 'axios';
import BlogCard from '../components/BlogCard';

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(
      'http://dininfluencer.yonasvalentin.dk/wp-json/wp/v2/posts?acf_format=standard'
    ).then((response) => {
      setPosts(response.data);
    });
  }, [setPosts]);

  return (
    <main className="blog-section">
      <div className="blog-section__container">
        <h2>Check out our latest blogposts</h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          //slidesPerView={1}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
            },
            '@0.75': {
              slidesPerView: 2,
            },
            '@1.00': {
              slidesPerView: 3,
            },
          }}
          navigation
          autoplay={true}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          onReachEnd={() => {
            /*...*/
          }}
        >
          {posts.map((post) => {
            if (post.categories == 3) {
              return (
                <SwiperSlide key={post.id}>
                  <BlogCard post={post} key={post.id} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </main>
  );
}
