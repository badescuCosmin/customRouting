import { useAuth } from './useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { RequireAuthProps } from './authTypes';

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const AuthContext = useAuth();
  const location = useLocation();

  if (!AuthContext?.token?.accessToken) {
    return <Navigate to={'/login'} state={{ from: location }}></Navigate>;
  }

  return children;
};
