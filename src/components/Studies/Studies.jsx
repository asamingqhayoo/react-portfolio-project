import React from "react";
import style from "./Studies.module.css";
import {
  FaReact,
  FaSquareJs,
  FaBootstrap,
  FaPhp,
  FaNode,
  FaWordpress,
} from "react-icons/fa6";

function Studies() {
  return (
    <div className={style.studies_con}>
      <h3 className={style.studies_title}>My Skill Set Development</h3>
      <ul className={style.studies_list}>
        <li>
          <FaReact />
        </li>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <FaBootstrap />
        </li>
        <li>
          <FaPhp />
        </li>
        <li>
          <FaNode />
        </li>
        <li>
          <FaWordpress />
        </li>
      </ul>
    </div>
  );
}

export default Studies;
