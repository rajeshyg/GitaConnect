import React, { useState } from 'react';
import Header from './Header';
import TabBar from './TabBar';
import Footer from './Footer';
import '../../styles/variables.css';
import '../../styles/global.css';
import './Layout.css';

const Layout = ({ children }) => {
  // On mobile devices, we'll hide the sidebar by default
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="ios-layout">
      <Header />
      <div className="ios-content">
        {children}
      </div>
      <TabBar />
    </div>
  );
};

export default Layout;
