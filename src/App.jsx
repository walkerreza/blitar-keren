import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DestinationPage from './pages/DestinationPage'
import DetailStoriesPage from './pages/DetailStoriesPage'
import StoriesPage from './pages/StoriesPage'
import ReviewPage from './pages/ReviewPage'
import CreateReviewPage from './pages/CreateReviewPage'
import TicketOrderPage from './pages/TicketOrderPage'
import LoginPage from './pages/LoginPage'

function App() {
  // Set basename dynamically based on the environment
  const basename = import.meta.env.PROD ? '/blitar-keren/' : '/';

  return (
    <Router basename={basename}>
      <div className="min-h-screen w-full overflow-hidden bg-white" style={{width: '100%', maxWidth: '100%', margin: 0, padding: 0}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/detail-stories" element={<DetailStoriesPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/create-review" element={<CreateReviewPage />} />
          <Route path="/ticket-order" element={<TicketOrderPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
