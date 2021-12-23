import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import './navigation.css';

export const Navigation = () => {
  const AuthContext = useAuth();
  const options = [
    {
      id: 'home',
      name: 'Home',
      to: '/',
    },
    {
      id: 'transactions',
      name: 'Transactionss',
      to: '/transactions',
    },
  ];
  return (
    <nav>
      {options.map(({ name, to, id }) => (
        <NavLink
          className={`${({ isActive }: any) =>
            isActive ? 'active' : ''} link`}
          key={id}
          to={to}
        >
          {name}
        </NavLink>
      ))}
      <button onClick={() => AuthContext?.logout()}>Log out</button>
    </nav>
  );
};
