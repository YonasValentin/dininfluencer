import { Link } from 'react-router-dom';
import AboutSectionImage from '../assets/images/6-section-img.png';

export default function AboutSection() {
  return (
    <main className="about-section">
      <div className="about-section__container">
        <h2>About DinInfluencer</h2>
        <p>
          We encourage our clients in expressing B2B, conveying the
          professionalism and metrics that matter in auditing and reporting, as
          it often costs a lot of money and therefore the company must feel
          safe.
        </p>
        <Link to="/sign-up">
          <button>Join Now</button>
        </Link>
        <figure className="about-section__image-wrapper">
          <img src={AboutSectionImage}></img>
        </figure>
      </div>
    </main>
  );
}
