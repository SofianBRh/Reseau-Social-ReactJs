import React from "react";
import logo from "./image/logo-react-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div
      className="bg-blue-500
               text-3xl text-black text-center
              flex
              justify-between
               w-full py-6
               px-10"
    >
      <div className=" flex">
      <NavLink to="/">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: 50, height: 50 }}
        />
        </NavLink>
        <div className="">
      <h1 className=" text-5xl text-black font-bold italic items-center px-10 py-3">R.E.A.C.T  ...</h1>
      </div>
      </div>
    
          <ul className="flex justify-end ">
            <li className="">
              <NavLink to="/connexion"><FontAwesomeIcon icon={faUser} size="xl" /></NavLink>
            </li>
            <li className="px-10">
              <NavLink to="#"><FontAwesomeIcon icon={faEnvelope} size="xl" /></NavLink>
            </li>
            <li className="">
              <NavLink to="#"><FontAwesomeIcon icon={faBell} size="xl" /></NavLink>
            </li>
          </ul>
        </div>
     
  );
}
