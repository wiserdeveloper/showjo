import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';

// import pages below
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfileCreationPage from './pages/ProfileCreationPage';
import HomePage from './pages/HomePage';
import FeedPage from './pages/FeedPage';
import UserProfilePage from './pages/UserProfilePage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-profile' element={<ProfileCreationPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
    </Routes>
    <Footer />
    </div>

  )
}

export default App;
