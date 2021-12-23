import { createContext, useEffect, useState } from 'react';
import { AuthService } from './authService';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  UseAuthProps,
  RouterProps,
  AuthContextProps,
  AuthProviderProps,
} from './authTypes';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = AuthService.getAcccessToken();

  useEffect(() => {
    if (
      userData?.accessToken &&
      AuthService.restrictedRoutesWhenAuthTokenActive.includes(
        location.pathname
      )
    ) {
      navigate('/', { replace: true });
    }
  }, []);

  const login = async (payload: UseAuthProps & RouterProps) => {
    await AuthService.login(payload);
    setIsAuthenticated(!isAuthenticated);
    navigate(payload.from, { replace: true });
  };

  const logout = async () => {
    await AuthService.logout();
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        token: userData,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
