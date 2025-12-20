import React from "react";
import Pizza from "./Pizza";
import "./index.css";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={20}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={20}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={20}
        photoName="pizzas/salamino.jpg"
      />
    </main>
  );
};

export default Menu;
