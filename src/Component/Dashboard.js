import React from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  return (
    <>
      <div>
        <nav
          style={{
            backgroundColor: '#007bff',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            width: '100%',
          }}
        >
          {/* Left side - Website Name */}
          <div>
            <h2 style={{ margin: 0 }}>
              <span style={{ margin: 0, color: '#a2ff00', fontWeight: 'light', fontSize: '50px', fontStyle: 'italic', textShadow: '2px 2px 4px #000' }}>Apne</span>
              <span style={{ marginLeft: '10px', color: 'white', fontWeight: 'bolder', fontSize: '20px' }}>Drive.com</span>
            </h2>
          </div>

          {/* Middle - Search Bar and Button */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '8px', width: '400px' }}
            />
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </div>

          {/* Right - Upload File */}
          <div>
            <label htmlFor="fileInput" style={{ marginTop: '0', cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faUpload} />
              Upload File
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Dashboard;
