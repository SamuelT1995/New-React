import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>{new Date().toLocaleTimeString()} We're currently Open</footer>
    </div>
  );
};

export default Footer;
