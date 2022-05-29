import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function handleUser() {
    navigate("/user");
  }

  return (
    <div>
      <p>home</p>
      <button onClick={handleUser}>跳转到user</button>
    </div>
  );
}

export default Home;
