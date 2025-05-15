import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("Page not found. Redirecting to home.");
    navigate("/Landing-page"); 
  }, [navigate]);

  return null;
};

export default NotFound;
