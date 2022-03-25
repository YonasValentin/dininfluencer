import HeroSection from '../sections/HeroSection';
import InfluencerSection from '../sections/InfluencerSection';
import MetricsSection from '../sections/MetricsSection';
import CollaborateSection from '../sections/CollaborateSection';
import CampaignSection from '../sections/CampaignSection';
import TailoredSection from '../sections/TailoredSection';
import ReviewSection from '../sections/ReviewSection';
import BlogSection from '../sections/BlogSection';

export default function FrontPage() {
  return (
    <main className="front-page">
      <div className="front-page__container">
        <HeroSection />
        <InfluencerSection />
        <MetricsSection />
        <CollaborateSection />
        <CampaignSection />
        <TailoredSection />
        <ReviewSection />
        <BlogSection />
      </div>
    </main>
  );
}
