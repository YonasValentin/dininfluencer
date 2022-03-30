import MetricsImage from '../assets/images/1-section-img.png';

export default function MetricsSection() {
  return (
    <section className="metrics-section">
      <div className="metrics-section__container">
        <figure className="metrics-section__img-wrapper">
          <img alt="metrics shown" src={MetricsImage}></img>
        </figure>
        <aside className="metrics-section__body-wrapper">
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
