import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numItems) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding to your packing list</em>
      </p>
    );
  return (
    <footer className="stats">
      {percentage === 100
        ? "Everything is packed. You're ready to go ✈️ "
        : `You have ${numItems} items on your list and You already packed ${packed}(
      ${percentage}%)`}
    </footer>
  );
};

export default Stats;
