import CampaignImage from '../assets/images/3-section-img.png';

export default function CampaignSection() {
  return (
    <section className="campaign-section">
      <div className="campaign-section__container">
        <figure className="campaign-section__img-wrapper">
          <img alt="collaborate shown" src={CampaignImage}></img>
        </figure>
        <aside className="campaign-section__body-wrapper">
          <h3>Leverage your campaign and handle performing influencers</h3>
          <p>
            Efficient sales charts and ROI report just above your dashboard. You
            can see your annual performance from your influencers in local
            campaigns.
          </p>
        </aside>
      </div>
    </section>
  );
}
