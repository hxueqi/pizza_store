import React from "react";
import { getIngredientsByPizza } from "../services/api";

const MenuItemCard = ({
  image,
  name,
  price,
  id,
  ingredients,
  setIngredients,
  onToggle,
}) => {
  const onHandleClick = (visualization) => {
    if (!ingredients.length) {
      getIngredientsByPizza(id)
        .then((response) => {
          setIngredients(response);
          onToggle(visualization);
        })
        .catch((error) => {
          onToggle(0);
          console.log(error);
        });
    } else {
      onToggle(visualization);
    }
  };

  return (
    <>
      <div
        className="menuItemBackground"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="menuItemContainer">
        <div className="menuItemContent">
          <h1 className="menuItemTitle">{name}</h1>
          <p>{price} €</p>
          <div className="menuButtonGroup">
            <button
              className="menuFooterButton"
              onClick={() => onHandleClick(1)}
            >
              Ingredients
            </button>
            <button
              className="menuFooterButton"
              onClick={() => onHandleClick(2)}
            >
              Modify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
