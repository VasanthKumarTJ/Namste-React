import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail,  } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { constant } from "lodash";


const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [action, setAction] = useState("Sign up")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // If both username and password are entered, navigate to the desired page (e.g., "/body").
      navigate("/body");
    } else {
      alert("Please enter a username and password");
    }
  };

  const handleLogin =() => {
    setAction("Login")
  }

  const handleSignUp =() => {
    setAction("Sign up")
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8  bg-slate-300">
      <div className="flex flex-col items-center gap-2 my-8 ">
        <div className="text-2xl font-semibold">{action}</div>
        <div className=" w-11 h-1 bg-black"></div>
      </div>
  
      <div className="flex flex-col gap-5 w-full max-w-md bg-pink-300 p-4 rounded-lg">
        <div>
          <input type="text" name="" id="" />
        </div>
        
        <div className="flex items-center">
          <MdEmail />
          <input className="ml-2" placeholder="Enter Email" type="email" />
        </div>
        <div className="flex items-center">
           <RiLockPasswordFill/><input className="ml-2" placeholder="Enter password" type="password" />
        </div>
      </div>
      <div className="mt-4">
        <input onClick={handleLogin} className="px-4 py-2 mr-2 rounded bg-blue-500 text-white cursor-pointer" type="submit" value="Login" />
        <input onClick={handleSignUp} className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer" type="submit" value="Signup" />
      </div>
    </div>
  );
  
};

export default Login;
