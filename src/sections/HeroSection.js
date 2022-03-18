import heroimage from '../assets/images/hero-image.png';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <figure className="hero-section__img-wrapper">
          <img alt="picture of influencer with camera" src={heroimage}></img>
        </figure>
        <aside className="hero-section__body-wrapper">
          <h1>
            Step up your influencer marketing in just <span>two ways</span>
          </h1>
          <p>
            An all-in-one platform that offers you relevant and effective
            influencers that makes a viable impact to your business.
          </p>
          <button>Get started</button>
        </aside>
      </div>
    </section>
  );
}
