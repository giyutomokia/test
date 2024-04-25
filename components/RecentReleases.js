import React, { useState } from 'react';
import './RecentReleases.css'; // Import CSS file for styling
import { FaFlag } from 'react-icons/fa'; // Import Material Design icon for flag

const RecentReleases = () => {
  // Sample data for recent updates
  const updates = [
    { date: 'February 12, 2024', title: 'India', description: 'The market capitalisation of Indian stocks crossed US$4.5 trillion in January...', source: 'Screw Note Ste Gove' },
    { date: 'February 10, 2024', title: 'State of Markets', description: 'The global stock markets experienced a significant downturn due to geopolitical tensions...', source: 'India DataHub' },
    // Add more updates as needed
  ];

  // Additional random updates
  const randomUpdates = [
    { date: 'February 15, 2024', title: 'European Markets', description: 'European stocks surged to record highs following positive economic data...', source: 'Euro News' },
    { date: 'February 18, 2024', title: 'Asia-Pacific Region', description: 'Asian markets experienced volatility amid uncertainty over trade agreements...', source: 'Asia Times' },
    // Add more random updates as needed
  ];

  // State to store the number of updates to display
  const [numUpdates, setNumUpdates] = useState(2); // Initial number of updates to display

  // State to track whether updates are expanded or not
  const [expanded, setExpanded] = useState(false);

  // State to store selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Function to handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    // You can add additional logic here, such as filtering updates based on the selected country
  };

  // Function to handle "View More" button click
  const handleViewMore = () => {
    // Toggle the expanded state
    setExpanded(!expanded);
    // Reset the number of updates to display if collapsing
    if (expanded) {
      setNumUpdates(2);
    }
  };

  return (
    <div className="recent-releases-container">
      {/* Header */}
      <h2>Recent Releases</h2>

      {/* Country selector */}
      <div className="country-selector">
        <FaFlag className="flag-icon" />
        <select value={selectedCountry} onChange={(e) => handleCountrySelect(e.target.value)}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          {/* Add more countries as needed */}
        </select>
      </div>

      {/* List of updates */}
      <div className="updates-container">
        <div className="updates-list">
          {[...updates, ...randomUpdates].slice(0, expanded ? updates.length + randomUpdates.length : numUpdates).map((update, index) => (
            <div key={index} className="update">
              <div className="date">{update.date}</div>
              <div className="title">{update.title}</div>
              <div className="description">{update.description}</div>
              <div className="source">{update.source}</div>
              {/* Add line break or whitespace separator */}
              {index !== updates.length + randomUpdates.length - 1 && <hr />}
            </div>
          ))}
        </div>
        {/* Vertical line */}
        <div className="vertical-line"></div>
      </div>

      {/* View More button */}
      <button className="view-more-btn" onClick={handleViewMore}>{expanded ? 'View Less' : 'View More'}</button>
    </div>
  );
};

export default RecentReleases;
