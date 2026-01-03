import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItem] = useState([]);
  const handleAddItem = (item) => {
    setItem((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItem((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClear = () => {
    const confirm = window.confirm("Are u use you wanna delete all items");
    if (confirm) setItem([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
