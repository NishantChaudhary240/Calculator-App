// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#333', color: '#fff', fontWeight:"bold"}}>
      &copy; {currentYear} Calculator App
    </footer>
  );
};

export default Footer;
