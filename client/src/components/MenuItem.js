import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import MenuItemIngredients from "./MenuItemIngredients";
import MenuModify from "./MenuModify";

function MenuItem(props) {
  const [ingredients = [], setIngredients] = useState([]);
  const [toggle, setToggle] = useState(0);
  const onToggle = (visualization) => {
    setToggle(visualization);
  };

  return (
    <div className="menuItem">
      {toggle === 0 && (
        <MenuItemCard
          ingredients={ingredients}
          setIngredients={setIngredients}
          onToggle={onToggle}
          {...props}
        />
      )}
      {toggle === 1 && (
        <MenuItemIngredients ingredients={ingredients} onToggle={onToggle} />
      )}
      {toggle === 2 && (
        <MenuModify
          ingredients={ingredients}
          setIngredients={setIngredients}
          pizzaId={props.id}
          onToggle={onToggle}
          {...props}
        />
      )}
    </div>
  );
}

export default MenuItem;
