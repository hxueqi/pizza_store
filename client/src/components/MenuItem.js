import React from "react";

function MenuItem({ name, price }) {
  return (
    <div className="menuItem">
      
      <h1> {name} </h1>
      <p> {price }€</p>
    </div>
  );
}

export default MenuItem;
