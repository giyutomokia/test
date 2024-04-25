// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaUserTie, FaSearch, FaDesktop, FaRegQuestionCircle } from 'react-icons/fa';
import { BiBuildings, BiSolidDollarCircle } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/profile" className="sidebar-icon">
        <FaUserTie />
      </Link>
      <Link to="/search" className="sidebar-icon" style={{ marginTop: '100px' }}>
        <FaSearch />
      </Link>
      <Link to="/desktop" className="sidebar-icon">
        <FaDesktop />
      </Link>
      <Link to="/help" className="sidebar-icon">
        <FaRegQuestionCircle />
      </Link>
      <Link to="/companies" className="sidebar-icon">
        <BiBuildings />
      </Link>
      <Link to="/finance" className="sidebar-icon">
        <BiSolidDollarCircle />
      </Link>
      <div className="sidebar-bottom">
        <Link to="/settings" className="sidebar-icon">
          <MdSettings />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
