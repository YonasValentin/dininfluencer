import HeroSection from '../sections/HeroSection';
import MetricsSection from '../sections/MetricsSection';
import CollaborateSection from '../sections/CollaborateSection';
import CampaignSection from '../sections/CampaignSection';
import TailoredSection from '../sections/TailoredSection';
import ReviewSection from '../sections/ReviewSection';

export default function FrontPage() {
  return (
    <main className="front-page">
      <div className="front-page__container">
        <HeroSection />
        <MetricsSection />
        <CollaborateSection />
        <CampaignSection />
        <TailoredSection />
        <ReviewSection />
      </div>
    </main>
  );
}
