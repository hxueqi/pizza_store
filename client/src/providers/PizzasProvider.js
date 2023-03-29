import React, { createContext, useContext, useState, useEffect } from "react";
import { getIngredients, getPizzas } from "../services/api";

const PizzasContext = createContext(null);

const usePizzasContext = () => {
  const context = useContext(PizzasContext);
  if (context === undefined) {
    throw new Error("usePizzasContext was used outside of its Provider");
  }
  return context;
};

function PizzasContextProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    getPizzas().then((response) => {
      setPizzas(response);
    });
    getIngredients().then((response) => {
      setIngredients(response);
    });
  }, [setPizzas, setIngredients]);

  return (
    <PizzasContext.Provider value={{pizzas, ingredients, setPizzas}}>{children}</PizzasContext.Provider>
  );
}

export { PizzasContext, PizzasContextProvider, usePizzasContext };
