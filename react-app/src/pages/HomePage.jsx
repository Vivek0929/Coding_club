import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import FeatureCards from '../components/Home/FeatureCards';
import VisionMission from '../components/Home/VisionMission';
import CTASection from '../components/Home/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      <VisionMission />
      <CTASection />
    </div>
  );
};

export default HomePage;