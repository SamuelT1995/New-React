import React from "react";

const Skill = ({ name, color }) => {
  return (
    <div>
      <span className="skill" style={{ backgroundColor: color }}>
        {name == "React" ? "React ⭐" : name}
      </span>
    </div>
  );
};

export default Skill;
