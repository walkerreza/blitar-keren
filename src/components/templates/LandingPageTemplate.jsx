import Navbar from '../organisms/Navbar';
import Hero from '../organisms/Hero';
import Sponsors from '../organisms/Sponsors';
import Features from '../organisms/Features';
import TopLocations from '../organisms/TopLocations';
import TopBeaches from '../organisms/TopBeaches';
import TopSelections from '../organisms/TopSelections';
import BlitarMap from '../organisms/BlitarMap';
import StreetViewTour from '../organisms/StreetViewTour';
import Footer from '../organisms/Footer';


function LandingPageTemplate() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white" style={{width: '100vw', maxWidth: '100vw', margin: 0, padding: 0}}>
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <div className="w-full px-8 py-12 my-8 relative z-0 bg-[#CC1720] overflow-hidden" style={{ backgroundImage: "url('/batik.svg')", backgroundSize: '500px', backgroundRepeat: 'repeat' }}>
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Explore Blitar</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/5">
            <StreetViewTour />
          </div>
          <div className="md:w-2/5 relative">
            <BlitarMap />
          </div>
        </div>
        </div>
      </div>
      <TopLocations />
      <TopBeaches />
      <TopSelections />
      <Footer />
    </div>
  );
}

export default LandingPageTemplate;
