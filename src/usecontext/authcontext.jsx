

import { createContext, useContext } from 'react';
import useAuth from './useAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { isLoggedIn, user, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
