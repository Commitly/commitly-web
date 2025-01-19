import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginCallbackPage from './pages/logincallback/LoginCallbackPage';
import MainPage from './pages/main/MainPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/login/callback" element={<LoginCallbackPage/>} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
