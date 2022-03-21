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
      reviewQuote:
        'Labore ut velit sunt ad irure cupidatat ad consectetur commodo Lorem excepteur cupidatat ullamco aliqua.',
      reviewProfileImage:
        'https://images.pexels.com/photos/3468711/pexels-photo-3468711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reviewProfiltImageAltTxt:
        'Magna culpa enim nulla id cupidatat esse ea mollit do esse sunt culpa.',
      reviewName: 'Shawn Hardy',
      reviewPosition: 'Lector',
    },
    {
      reviewID: 2,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage:
        'https://images.pexels.com/photos/11384153/pexels-photo-11384153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Larry Briggs',
      reviewPosition: 'Lector',
    },
    {
      reviewID: 3,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage:
        'https://images.pexels.com/photos/11384153/pexels-photo-11384153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Larry Briggs',
      reviewPosition: 'Lector',
    },
    {
      reviewID: 4,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage:
        'https://images.pexels.com/photos/11384153/pexels-photo-11384153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Larry Briggs',
      reviewPosition: 'Lector',
    },
    {
      reviewID: 5,
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage:
        'https://images.pexels.com/photos/11384153/pexels-photo-11384153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Larry Briggs',
      reviewPosition: 'Lector',
    },
  ];

  return (
    <main className="review-section">
      <div className="review-section__container">
        <h2 className="review-section__heading">
          What our clients have to say
        </h2>
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
            <SwiperSlide key={review.id}>
              <div className="review-section__review-box">
                <h2 className="review-section__quote">{review.reviewQuote}</h2>
                <figure className="review-section__image-wrapper">
                  <img
                    src={review.reviewProfileImage}
                    alt={review.reviewProfileImageAltTxt}
                  ></img>
                </figure>
                <p className="review-section__name">{review.reviewName}</p>
                <p className="review-section__position">
                  {review.reviewPosition}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
