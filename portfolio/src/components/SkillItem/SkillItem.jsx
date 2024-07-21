import React from "react";

const SkillItem = ({ icon, name }) => (
  <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skills-tile">
        <i className={icon}></i>
        <p className="text-center">{name}</p>
      </div>
    </span>
  </li>
);

export default SkillItem;
