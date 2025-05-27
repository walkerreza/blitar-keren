import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import DestinationHero from '../organisms/DestinationHero';
import DestinationGrid from '../organisms/DestinationGrid';

function DestinationPageTemplate() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white" style={{width: '100vw', maxWidth: '100vw', margin: 0, padding: 0}}>
      <Navbar />
      <DestinationHero />
      <DestinationGrid />
      <Footer />
    </div>
  );
}

export default DestinationPageTemplate;
