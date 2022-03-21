import TailoredImage from '../assets/images/4-section-img.png';

export default function TailoredSection() {
  return (
    <section className="tailored-section">
      <div className="tailored-section__container">
        <figure className="tailored-section__img-wrapper">
          <img alt="metrics shown" src={TailoredImage}></img>
        </figure>
        <aside className="tailored-section__body-wrapper">
          <h3>All of your metrics in our sophisticated dashboard</h3>
          <p>
            Keep track of your campaigns and see how well it went for each
            campaign. See all of your shortlisted and recommended influencers in
            one screen with reporting on how each influencers progressed the
            metrics for KPI.
          </p>
        </aside>
      </div>
    </section>
  );
}
