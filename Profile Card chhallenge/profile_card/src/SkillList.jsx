import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  const skills = [
    { name: "HTML+CSS", color: "#4dabf7" },
    { name: "JavaScript", color: "#ffd43b" },
    { name: "Web Design", color: "#69db7c" },
    { name: "Git and GitHub", color: "#ff8787" },
    { name: "React", color: "#63e6be" },
    { name: "Svelte", color: "#ffa94d" },
  ];
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.name} color={skill.color} key={skill.name} />
      ))}
    </div>
  );
};

export default SkillList;
