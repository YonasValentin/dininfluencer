export default function ReviewSection() {
  const reviewsArray = [
    {
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
      reviewQuote: 'Nulla tempor pariatur duis cillum ad reprehenderit.',
      reviewProfileImage:
        'https://images.pexels.com/photos/11384153/pexels-photo-11384153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      reviewProfileImageAltTxt:
        'Labore magna elit exercitation consequat enim in.',
      reviewName: 'Larry Briggs',
      reviewPosition: 'Lector',
    },
  ];

  let slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelector('.review-section__review-wrapper');
    let dots = document.querySelector('.review-section__dot');

    const reviewQuote = document.querySelector('.review-section__quote');
    const reviewProfileImage = document.querySelector(
      '.review-section__profile-image'
    );
    const reviewProfileImageAltTxt = document.querySelector(
      '.review-section__profile-image'
    );
    const reviewName = document.querySelector('.review-section__name');
    const reviewPosition = document.querySelector('.review-section__position');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    reviewQuote.innerText = reviewsArray[i].reviewQuote;
    reviewProfileImage.src = reviewsArray[i].reviewProfileImage;
    reviewProfileImageAltTxt.alt = reviewsArray[i].reviewProfiltImageAltTxt;
    reviewName.innerText = reviewsArray[i].reviewName;
    reviewPosition.innerText = reviewsArray[i].reviewPosition;

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  return (
    <main className="review-section">
      <div className="review-section__container">
        <h2 className="review-section__heading">
          What our clients have to say
        </h2>
        <aside className="review-section__review-box">
          <div classname="review-section__review-wrapper">
            <p className="review-section__quote"></p>
            <img className="review-section__profile-image"></img>
            <h5 className="review-section__name"></h5>
            <p className="review-section__position"></p>
          </div>
          <div className="review-section__dots-wrapper">
            <span
              className="review-section__dot"
              onClick={currentSlide(1)}
            ></span>
            <span
              className="review-section__dot"
              onClick={currentSlide(2)}
            ></span>
            <span
              className="review-section__dot"
              onClick={currentSlide(3)}
            ></span>
          </div>
        </aside>
      </div>
    </main>
  );
}
