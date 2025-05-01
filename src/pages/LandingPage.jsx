import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">Road Damage Reporting System</h1>
          <p className="lead mb-4">
            Help improve our roads by reporting damage and issues you encounter.
          </p>
          {isLoggedIn ? (
            <div>
              <p className="mb-4">Welcome, {user.fullName}!</p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <button
                  className="btn btn-primary btn-lg px-4 gap-3"
                  onClick={() => navigate('/report')}
                >
                  Submit Report
                </button>
                <button
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <button
                className="btn btn-primary btn-lg px-4 gap-3"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 