import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Transactions } from './pages/transactions';
import { AuthProvider } from './auth/authProvider';
import { RequireAuth } from './auth/requireAuth';
import { NotFound } from './pages/notFound';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ textAlign: 'center' }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<App />}>
              <Route
                path='/'
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path='/transactions'
                element={
                  <RequireAuth>
                    <Transactions />
                  </RequireAuth>
                }
              ></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
