import React from "react";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import Cards from "../component/Cards.js";
import Sidebar_profil from "../component/Sidebar_profil";
import "./Profil.css";

const Profil = () => {
  return (
    <>
      <Navbar />
      <div className="profil">
        <div className="divCard">

            <Cards />
           
        </div>
          <div className="body">
            <Sidebar_profil />
          </div>

        
      </div>
      <Footer />
    </>
  );
};

export default Profil;
