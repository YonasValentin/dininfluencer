import HeroSection from '../sections/HeroSection';
import MetricsSection from '../sections/MetricsSection';
import CollaborateSection from '../sections/CollaborateSection';

export default function FrontPage() {
  return (
    <main className="front-page">
      <div className="front-page__container">
        <HeroSection />
        <MetricsSection />
        <CollaborateSection />
      </div>
    </main>
  );
}
