import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FileCard from './components/FileCard';
import Carousel from './components/Carousel';
import RecentReleases from './components/RecentReleases';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import DesktopPage from './pages/DesktopPage';
import CompaniesPage from './pages/CompaniesPage';
import FinancePage from './pages/FinancePage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';

// Import images from the assets folder
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

function App() {
  // Sample data for the Carousel
  const carouselData = [
    { imageSrc: img2, header: 'State of Markets', content: 'The market capitalisation of Indian stocks crossed of Indian stocks in January' },
    { imageSrc: img3, header: 'The central Capex Surge', content: 'The last few years have seen a substantial step up in a capital' },
    { imageSrc: img4, header: 'Direct Taxes and Business Cycle', content: 'The share of direct taxes in total taxes collections of the Central Government is' },
    { imageSrc: img5, header: 'Banking Monitor', content: 'Credit Growth has remained broadly stable in recent weeks at just' },
    // Add more items as needed
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          {/* Nested Routes for pages */}
          <Routes>
            <Route path="/" element={(
              <>
                <div className="content">
                  {/* Render FileCard components */}
                  <FileCard documentName="Document 1" date="25-04-2024" color="red" />
                  <FileCard documentName="Document 2" date="26-04-2024" color="blue"/>
                  <FileCard documentName="Document 3" date="27-04-2024" color="green"/>
                  <FileCard documentName="Document 4" date="28-04-2024" color="orange"/>
                  <FileCard documentName="Document 5" date="29-04-2024" color="purple"/>
                </div>
                {/* Render the Carousel component */}
                <Carousel data={carouselData} />
                {/* Render the RecentReleases component */}
                <RecentReleases />
              </>
            )} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/desktop" element={<DesktopPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
