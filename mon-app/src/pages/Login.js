import { useState } from "react";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import { Button, TextField } from "@mui/material";



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
       <div className=" py-4">
            <TextField
            className=" flex justify-center w-full bg-white" 
              id="name"
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
              label="Firstname"
              type="text"
              name="firstname"
              onChange={handleChange}
            />
        </div>
        <div className="py-4"> 
            <TextField
            className=" flex justify-center w-full  bg-white"
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
          <div className="py-4">
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
     
          </div>
        </form>
        
      </div>
      <Footer />
    </>
  );
};

export default Login;
