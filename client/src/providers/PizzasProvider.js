import React, { createContext, useContext, useState, useEffect } from "react";
import getPizzas from "../services/api";

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
  useEffect(() => {
    getPizzas()
    .then((response) => {
        console.log(response);
        setPizzas(response)
    });
  }, [setPizzas]);

  return (
    <PizzasContext.Provider value={pizzas}>{children}</PizzasContext.Provider>
  );
}

export { PizzasContext, PizzasContextProvider, usePizzasContext };
