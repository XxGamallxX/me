import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/"); 
    alert("Page not found. Redirecting to home.");
  }, [navigate]);

  return null;
};

export default NotFound;
