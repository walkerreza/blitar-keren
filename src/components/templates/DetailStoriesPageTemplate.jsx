import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import DetailStoriesHero from '../organisms/DetailStoriesHero';
import DetailStoriesGrid from '../organisms/DetailStoriesGrid';
import DestinationInfo from '../organisms/DestinationInfo';

function DetailStoriesPageTemplate() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white" style={{width: '100vw', maxWidth: '100vw', margin: 0, padding: 0}}>
      <Navbar />
      <DetailStoriesHero />
      <DestinationInfo />
      <DetailStoriesGrid />
      <Footer />
    </div>
  );
}

export default DetailStoriesPageTemplate;
