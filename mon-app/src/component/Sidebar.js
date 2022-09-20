import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="test">
          <h2 className="titre">Amis connectés</h2>

          <ul className="list">
            <li className="user">
              <FontAwesomeIcon icon={faUser} size="2xl" />
              <h3 className="name">name firstname</h3>
            </li>
            <li className="user">
              <FontAwesomeIcon icon={faUser} size="2xl" />
              <h3 className="name">name firstname</h3>
            </li>
            <li className="user">
              <FontAwesomeIcon icon={faUser} size="2xl" />
              <h3 className="name">name firstname</h3>
            </li>
            <li className="user">
              <FontAwesomeIcon icon={faUser} size="2xl" />
              <h3 className="name">name firstname</h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
