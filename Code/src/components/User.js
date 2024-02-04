import React from "react";
import { useState } from "react";

const User = (props) => {
  const [count4, setCount4] = useState(0);

  return (
    <div className="user-container">
      <h1>Count: {count4}</h1>
      <button onClick={
        () => {
          setCount4(count4 + 1);
        }
      }>click</button>
      <h1>Name: {props.name}</h1>
      <h2>Contact: vasanthtj8@gmail.com</h2>
    </div>
  );
};

export default User;
