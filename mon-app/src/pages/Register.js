import { useState } from "react";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import { Button, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';


import "./Login.css";

const Register = () => {
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
        <h1 className=" text-5xl text-blue-600 m-4 p-20">S'inscrire</h1>
       <div className=" py-4">
            <TextField
            className=" flex justify-center w-full bg-white" 
              id="name"
              color="primary" focused 
              label="Name"
              type="text"
              name="name"
              onChange={handleChange}
            />
        </div>
        <div className="py-4">
            <TextField
            className=" flex justify-center w-full bg-white border-solid"
              id="firstname"
              color="primary" focused 
              label="Firstname"
              type="text"
              name="firstname"
              onChange={handleChange}
            />
        </div>
        <div className=" py-4">
            <TextField
            className=" flex justify-center w-full bg-white" 
              id="mail"
              color="primary" focused 
              label="Adresse mail"
              type="text"
              name="mail"
              onChange={handleChange}
            />
        </div>
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
          <div className="py-4">
            <NavLink to="/profil">
            <Button
            className=""
              size="large"
              variant="contained"
              disableElevation
              color="primary"
              type="submit"
            >
              Inscription
            </Button>
            </NavLink>
          </div>
        </form>
        
      </div>
      <Footer />
    </>
  );
};

export default Register;
