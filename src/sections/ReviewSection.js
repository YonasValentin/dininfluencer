export default function ReviewSection() {
  const reviewsArray = [
    {
      reviewQuote:
        'Labore ut velit sunt ad irure cupidatat ad consectetur commodo Lorem excepteur cupidatat ullamco aliqua.',
      reviewProfileImage: '',
      reviewProfiltImageAltTxt: '',
      reviewName: '',
      reviewPosition: '',
      reviewStars: '',
    },
  ];

  return (
    <main className="review-section">
      <div className="review-section__container">
        <h2 className="review-section__heading">
          What our clients have to say
        </h2>
        <aside className="review-section__review-box"></aside>
      </div>
    </main>
  );
}
