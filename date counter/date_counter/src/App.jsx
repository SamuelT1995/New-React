import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("Jan 21 2028");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={() => setStep((s) => s + 1)}>+</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((s) => s - 1)}>- </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>
      <p>
        <span>
          {count == 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days ago is`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default App;
