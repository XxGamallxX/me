import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ReportPage from './pages/ReportPage';
import TrackReport from './pages/TrackReport';

function App() {

  return (
    <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Submit Report" element={<ReportPage />} />
          <Route path='/Track Report' element={<TrackReport />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
 
    </Router>
  );
}

export default App;
