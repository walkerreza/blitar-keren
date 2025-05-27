import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import StoriesHero from '../organisms/StoriesHero';
import StoriesGrid from '../organisms/StoriesGrid';
import TopStories from '../organisms/TopStories';

function StoriesPageTemplate() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white" style={{width: '100vw', maxWidth: '100vw', margin: 0, padding: 0}}>
      <Navbar />
      <StoriesHero />
      <TopStories />
      <StoriesGrid />
      <Footer />
    </div>
  );
}

export default StoriesPageTemplate;
