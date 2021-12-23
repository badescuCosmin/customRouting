import { UseAuthProps } from './authTypes';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
class Auth {
  restrictedRoutesWhenAuthTokenActive: string[];
  constructor() {
    this.restrictedRoutesWhenAuthTokenActive = ['/register', '/login'];
  }
  getAcccessToken = () => JSON.parse(localStorage.getItem('user') || '{}');
  login = async ({ email, password }: UseAuthProps) => {
    // simulatig an api call
    await delay(1000);
    localStorage.setItem(
      'user',
      JSON.stringify({
        accessToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9',
        refreshToken:
          'eyJhdWQiOlsiVFNBX0FQSSJdLCJ1c2VyX25hbWUiOiJ1c2VyLTEyMjM1Iiwic2NvcGUiOl',
      })
    );
  };
  logout = async () => {
    await localStorage.removeItem('user');
  };
}

export const AuthService = new Auth();
