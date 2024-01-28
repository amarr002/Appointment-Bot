import React from "react";
import { useLocation } from "react-router-dom";

function Thankyou() {
  const location = useLocation();
  const age = new URLSearchParams(location.search).get("age");
  const name = new URLSearchParams(location.search).get("name");

  return (
    <div>
      <h1>
        Your name is {name} and aged {age} has been added to student system.
      </h1>
      <h2> You may now exit</h2>
    </div>
  );
}

export default Thankyou;
