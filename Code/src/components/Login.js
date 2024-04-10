import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import background from "../../assets/background.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "vicky" && password === "0108") {
      // Save username to local storage
      localStorage.setItem("username", username);
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="wrapper flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat object-contain"
      style={{ backgroundImage: `url(${background})` }}
    >
      <form
        onSubmit={handleLogin}
        className="w-[420px] bg-transparent border-2 border-black rounded-lg py-8 px-10 backdrop-blur-sm shadow-md text-black"
      >
        <h1 className="text-4xl text-center font-bold mb-8">Login</h1>
        <div className="input-box relative w-full h-12 mx-0 my-8">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="placeholder-black rounded-full w-full h-full bg-transparent outline-0 border-2 border-solid border-black pl-4 pr-12e"
          />
          <FaUser className="absolute right-6 top-2 translate-y-2" />
        </div>
        <div className="input-box rounded-3xl relative w-full h-12 mx-0 my-8">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="placeholder-black rounded-full w-full h-full bg-transparent outline-0 border-2 border-solid border-black pl-4 pr-12 "
          />
          <FaLock className="absolute right-6 top-2 translate-y-2" />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-black text-white border-0 cursor-pointer shadow-md text-base font-bold w-full h-11 rounded-full"
        >
          login
        </button>
        <div className="register-link text-base text-center mt-6 mx-0 my-4">
          <p>
            Don't have an account?<a href="#" className="font-bold hover:underline"> Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
