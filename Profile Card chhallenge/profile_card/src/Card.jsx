import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import Skill from "./Skill";
import SkillList from "./SkillList";

const Card = () => {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
};

export default Card;
