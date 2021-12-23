import { useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

interface CustomizedState {
  from: {
    pathname: string;
  };
}

export const Login = () => {
  const authContext = useAuth();
  const credentials = {
    email: 'test@gmail.com',
    password: '1234',
  };
  const { email, password } = credentials;

  const location = useLocation();
  const locationHistory = location.state as CustomizedState; // Type Casting, then you can get the params passed via router
  return (
    <>
      <h1>LOGIN PAGE</h1>
      <button
        onClick={() =>
          authContext?.login({
            email,
            password,
            from: locationHistory?.from?.pathname || '/',
          })
        }
      >
        Login
      </button>
    </>
  );
};
