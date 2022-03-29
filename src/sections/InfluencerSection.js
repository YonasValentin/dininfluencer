import { useState, useEffect } from 'react';
import { onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { influencersRef } from '../firebase-config';
import PostCard from '../components/PostCard';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

export default function InfluencerOverview() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const q = query(
      influencersRef,
      orderBy('followersCount', 'desc'),
      limit(10)
    ); // order by: lastest post first
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
    <main className="influencer-section">
      <div className="influencer-section__container">
        <h2>Take a look at our leading influencers</h2>
        <p>
          See a list of top recommended influencers in your area. Further search
          for your ideal candidates through our intuitive filtering and sorting
          features.
        </p>
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
            '@1.50': {
              slidesPerView: 4,
            },
          }}
          navigation
          autoplay={true}
          loop={true}
          spaceBetween={24}
          pagination={{ clickable: true, dynamicBullets: true }}
          onReachEnd={() => {
            /*...*/
          }}
        >
          {influencers.map((influencer) => (
            <SwiperSlide key={influencer.id}>
              <PostCard influencer={influencer} key={influencer.id} />
            </SwiperSlide>
          ))}
        </Swiper>
        <h2>Or get influencers tailored to your business</h2>
        <p>
          A step-by-step questionnaire where we match eligible influencers to
          your business profile. Start up now and shortlist one of the right
          candidates for you.
        </p>
        <Link to="/multistepform">
          <button>Get started</button>
        </Link>
      </div>
    </main>
  );
}
