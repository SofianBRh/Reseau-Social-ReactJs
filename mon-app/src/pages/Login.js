import { useState } from "react";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import { Button, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';


import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    identifiant: "",
    password: "",
  });

  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget);
    const value = currentTarget.value;
    const name = currentTarget.name;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  return (
    <>
      <Navbar />
     
      <div className="flex justify-center bg-blue-200">
     
        <form className="flex justify-center flex-col min-h-screen">
        <h1 className=" text-5xl text-blue-600 m-4 p-20">Se connecter</h1>
        
        <div className="py-4"> 
            <TextField
            className=" flex justify-center w-full  bg-white"
            color="primary" focused 
              id="identifiant"
              label="username"
              type="text"
              name="identiant"
              onChange={handleChange}
            />
        </div>
        <div className="py-4">
            <TextField
            className=" flex justify-center w-full  bg-white"
            color="primary" focused 
              id="password"
              label="password"
              type="text"
              name="password"
              onChange={handleChange}
            />
        </div>
        <a class="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800" href="#">
        Mot de passe oublié ?
      </a>
      <div className="flex">
          <div className="py-4 m-4">
            <NavLink to="/profil">
            <Button
            className=""
              size="large"
              variant="contained"
              disableElevation
              color="primary"
              type="submit"
            >
              Connexion
            </Button>
            </NavLink>
          </div>
          <div className="py-4 m-4">
            <NavLink to="/inscription">
            <Button
            className=""
              size="large"
              variant="contained"
              disableElevation
              color="primary"
              type="submit"
            >
              S'inscrire
            </Button>
            </NavLink>
          </div>
          </div>
        </form>
        
      </div>
      <Footer />
    </>
  );
};

export default Login;
