import React from 'react';
import { MdLibraryBooks } from 'react-icons/md'; // Import Material Design icon
import './FileCard.css';

const FileCard = ({ documentName, date, color }) => {
  const iconStyle = {
    color: color,
  };

  const textStyle = {
    color: color,
  };

  return (
    <div className="file-card">
      <div className="icon" style={iconStyle}><MdLibraryBooks /></div>
      <div className="document-name" style={textStyle}>{documentName}</div>
      <div className="date" style={textStyle}>{date}</div>
    </div>
  );
};

export default FileCard;
