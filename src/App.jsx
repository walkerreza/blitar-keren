import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DestinationPage from './pages/DestinationPage'
import DetailStoriesPage from './pages/DetailStoriesPage'
import StoriesPage from './pages/StoriesPage'
import ReviewPage from './pages/ReviewPage'
import CreateReviewPage from './pages/CreateReviewPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-hidden bg-white" style={{width: '100%', maxWidth: '100%', margin: 0, padding: 0}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/detail-stories" element={<DetailStoriesPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/create-review" element={<CreateReviewPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
