import React, { useState } from "react";

function Sample() {
  const [name, setname] = useState("amni");
  function handlenameupdate() {
    setname("priya");
  }
  return (
    <div>
      <h1> {name}</h1>
      <button onClick={handlenameupdate}>Click me</button>
    </div>
  );
}

export default Sample;
