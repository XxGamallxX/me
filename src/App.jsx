import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './usecontext/authcontext';
// Import pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReportPage from './pages/ReportPage';
import TrackReport from './pages/TrackReport';
import Profile from './pages/Profile';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/Landing-page" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Submit Report" element={<ReportPage />} />
          <Route path='/Track Report' element={<TrackReport />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;
