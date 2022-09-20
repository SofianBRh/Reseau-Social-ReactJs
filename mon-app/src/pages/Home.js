import React from "react";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import Cards from "../component/Cards.js";
import Sidebar from "../component/Sidebar.js";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="divCard">

            <Cards />
            <Cards />
        </div>
          <div className="body">
            <Sidebar />
          </div>

        
      </div>
      <Footer />
    </>
  );
};

export default Home;
