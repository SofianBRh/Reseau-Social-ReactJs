import React from "react";
import "./Sidebar_profil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar_profil() {
  return (
    <>
      <div className="sidebar">
      <div className="profil_user">
      <ul className="list">
            <li className="users">
              <FontAwesomeIcon icon={faUser} size="4x" />
              <h3 className="profil_name">name firstname</h3>
            </li>
            <li className="user">
              <FontAwesomeIcon icon={faEnvelope} size="3x"/>
              <h3 className="profil_messages">Messages</h3>
            </li>
            <li className="user">
              <FontAwesomeIcon icon={faBell} size="3x"/>
              <h3 className="profil_messages">Notifications</h3>
            </li>
    </ul>
    </div>
        <div className="amis_connect">
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
export default Sidebar_profil;