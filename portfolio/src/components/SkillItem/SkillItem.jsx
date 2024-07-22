import React from "react";

const SkillItem = ({ iconClass, skillName }) => (
  <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skills-tile">
        <i className={iconClass}></i>
        <p className="text-center">{skillName}</p>
      </div>
    </span>
  </li>
);

export default SkillItem;
