import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import TabBar from './components/layout/TabBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<div className="not-found">Page Not Found</div>} />
          </Routes>
        </main>
        <TabBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
