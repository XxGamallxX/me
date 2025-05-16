import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}

export function useauthContext() {
  return useContext(authContext);
}
