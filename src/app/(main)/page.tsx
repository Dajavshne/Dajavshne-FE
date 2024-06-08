import AboutUs from './components/AboutUs';
import BecomePartner from './components/BecomePartner/BecomePartner';
import Slider from './components/Slider';
import TopWashingCenters from './components/TopWashingCenters';

export default function Home() {
  return (
    <>
      <Slider />
      <TopWashingCenters />
      <BecomePartner />
      <AboutUs />
    </>
  );
}
