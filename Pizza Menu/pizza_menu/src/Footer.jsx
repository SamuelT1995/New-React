import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      {isOpen ? (
        <div className="order">
          <p>we're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>Sorry we're closed. We'll open at {openHour}</p>
      )}
    </div>
  );
};

export default Footer;
