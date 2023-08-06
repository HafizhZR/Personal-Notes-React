import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ToggleTheme from './components/ToggleTheme';
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  }

  useEffect(() => {
    const fetchAuthedUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchAuthedUser();
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="app-container">
        <header>
          <h1><Link to={`/`}>Aplikasi Catatan</Link></h1>
          <ToggleTheme />
        </header>
        <Routes>
          <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
    <div className="app-container">
      <header>
        <h1><Link to={`/`}>Aplikasi Catatan</Link></h1>
        <ToggleTheme />
        <Link to="/"><Navigation onLogout={onLogout} name={authedUser.name} /></Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
    </ThemeProvider>
  )
}

export default App;
