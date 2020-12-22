import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
  <footer className="footer">
    <p className="footer__content">Copyright {year}</p>
  </footer>
  )
}

export default Footer;