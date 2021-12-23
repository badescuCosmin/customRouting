type AuthTokenProps = {
  accessToken: string;
  refreshToken: string;
};

export type UseAuthProps = {
  email: string;
  password: string;
};

export type RouterProps = {
  from: string;
};

export type AuthContextProps = {
  token: AuthTokenProps | null;
  login: (payload: UseAuthProps & RouterProps) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type RequireAuthProps = {
  children: JSX.Element;
};
