import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-space" />
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
