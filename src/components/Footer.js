import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__content">Copyright © {currentYear}</p>
    </footer>
  )
}

export default Footer;