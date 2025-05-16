import { Navigate, useLocation } from 'react-router-dom';
import { useauthContext } from '../context/authcontext';
import { useEffect, useState } from 'react';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useauthContext();
  const location = useLocation();
  const [showRedirect, setShowRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      alert('You are not logged in. Please login to continue.');
      setShowRedirect(true);
    }
  }, [isLoggedIn, loading]);

  if (loading) {
    return <div>Loading.........</div>;
  }

  if (showRedirect) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
