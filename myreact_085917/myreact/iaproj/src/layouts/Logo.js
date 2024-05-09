import React from 'react';
import logo from '../assets/images/logos/logo.webp';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Use an <img> tag to display the logo image */}
      <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '40px' }} />
      {/* Optionally, you can add a text label */}
      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>RideMe</span>
    </div>
  );
};

export default Logo;
