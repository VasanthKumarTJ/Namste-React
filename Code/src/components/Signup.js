import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background.jpg";


const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    // Save username and password to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    // Redirect to login page after signup
    navigate("/");
  };

  return (
    <div className="wrapper flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat object-contain" style={{ backgroundImage: `url(${background})` }}>
      <form
        onSubmit={handleSignup}
        className="w-[420px] bg-transparent border-2 border-black rounded-lg py-8 px-10 backdrop-blur-sm shadow-md text-black"
        
      >
        <h1 className="text-4xl text-center font-bold mb-8">Signup</h1> 
        <div className="input-box relative w-full h-12 mx-0 my-8">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="placeholder-black rounded-full w-full h-full bg-transparent outline-0 border-2 border-solid border-black pl-4 pr-12"
          />
          <FaUser className="absolute right-6 top-2 translate-y-2" />
        </div>
        <div className="input-box rounded-3xl relative w-full h-12 mx-0 my-8">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="placeholder-black rounded-full w-full h-full bg-transparent outline-0 border-2 border-solid border-black pl-4 pr-12"
          />
          <FaLock className="absolute right-6 top-2 translate-y-2" />
        </div>
        <button
          type="submit"
          className="bg-black text-white border-0 cursor-pointer shadow-md text-base font-bold w-full h-11 rounded-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
