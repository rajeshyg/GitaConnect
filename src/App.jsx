import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Opportunities from './pages/Opportunities/Opportunities';
import Announcements from './pages/Announcements/Announcements';
import AnnouncementDetail from './pages/Announcements/AnnouncementDetail';
import Profile from './pages/Profile/Profile';
import FindAlumni from './pages/FindAlumni/FindAlumni';
import Messages from './pages/Messages/Messages';
import TestComponentsPage from './pages/Home/TestUIComponents';

const NotFound = () => (
  <div>
    Page Not Found<br />
    The page you're looking for isn't available.
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          {/* ...existing navigation... */}
          <li>
            <Link to="/test-components">Test Components</Link>
          </li>
        </ul>
      </nav>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/opportunities/:id" element={<Opportunities />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/find-alumni" element={<FindAlumni />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/test-components" element={<TestComponentsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  </Router>
);

export default App;