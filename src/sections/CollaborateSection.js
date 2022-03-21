import CollaborateImage from '../assets/images/2-section-img.png';

export default function CollaborateSection() {
  return (
    <section className="collaborate-section">
      <div className="collaborate-section__container">
        <figure className="collaborate-section__img-wrapper">
          <img alt="collaborate shown" src={CollaborateImage}></img>
        </figure>
        <aside className="collaborate-section__body-wrapper">
          <h1>Collaborate with the leading influencers</h1>
          <p>
            Build and nurture relationships with influencers to create long term
            partnerships that will generate quality content for your brand and
            drive better results. See in depth details on influencers profile
            without the overwhelming metrics and simply present to you the
            information that you'll need.
          </p>
        </aside>
      </div>
    </section>
  );
}
