import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function ReviewSection() {
  const reviewsList = [
    {
      reviewID: 1,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage: 'https://api.lorem.space/image/face?hash=o979khmo',
      reviewProfiltImageAltTxt:
        'Magna culpa enim nulla id cupidatat esse ea mollit do esse sunt culpa.',
      reviewName: 'Shawn Hardy',
      reviewProfession: 'CEO, Vestas',
    },
    {
      reviewID: 2,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage: 'https://api.lorem.space/image/face?hash=03sniipn',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Angel Berry',
      reviewProfession: 'Store Manager, Nille',
    },
    {
      reviewID: 3,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage: 'https://api.lorem.space/image/face?hash=m8c9biyb',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Leo Morales',
      reviewProfession: 'Chef, Noma',
    },
    {
      reviewID: 4,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage: 'https://api.lorem.space/image/face?hash=bv2em43g',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Loretta Wells',
      reviewProfession: 'Personal Trainer, Fitness World',
    },
    {
      reviewID: 5,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage: 'https://api.lorem.space/image/face?hash=kuqy2ary',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Estelle Singleton',
      reviewProfession: 'Manager, Casino Royal',
    },
  ];

  return (
    <main className="review-section">
      <div className="review-section__container">
        <h2 className="review-section__heading">
          What our clients have to say
        </h2>
        <div className="review-section__review-box">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            autoplay={true}
            loop={true}
            pagination={{ clickable: true }}
            onReachEnd={() => {
              /*...*/
            }}
          >
            {reviewsList.map((review) => (
              <SwiperSlide key={review.reviewID}>
                <p className="review-section__quote">{review.reviewQuote}</p>
                <figure className="review-section__image-wrapper">
                  <img
                    src={review.reviewProfileImage}
                    alt={review.reviewProfileImageAltTxt}
                  ></img>
                </figure>
                <h5 className="review-section__name">{review.reviewName}</h5>
                <p className="review-section__profession">
                  {review.reviewProfession}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
