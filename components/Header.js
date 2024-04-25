import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling
import { FaCalendarAlt, FaBell, FaClock } from 'react-icons/fa';  // Import Material Design icons

const Header = () => {
  const [showDate, setShowDate] = useState(true);
  const [showTime, setShowTime] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  // Get today's date and time
  const today = new Date();
  const dateOptions = { day: 'numeric', month: 'short' };
  const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit' };
  const dateString = today.toLocaleDateString('en-US', dateOptions);
  const timeString = today.toLocaleTimeString('en-US', timeOptions);

  // Get the time of day
  let greeting;
  const hour = today.getHours();
  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  // Sample notification messages
  const notificationMessages = [
    'New message received',
    'Reminder: Meeting at 10 AM',
    'You have 3 new notifications',
  ];

  // Randomly select a notification message
  const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];

  return (
    <nav className="navbar">
      <p className="greeting">{greeting}, Lasya</p>
      <div className="right-menu">
        <div className="icon-with-text" onClick={() => setShowDate(!showDate)}>
          <FaCalendarAlt />
          {showDate && <p>{dateString}</p>}
        </div>
        <div className="icon-with-text" onClick={() => setShowTime(!showTime)}>
          <FaClock />
          {showTime && <p>{timeString}</p>}
        </div>
        <div className="icon-with-text" onClick={() => setShowNotifications(!showNotifications)}>
          <FaBell />
          {showNotifications && <p>{randomMessage}</p>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
