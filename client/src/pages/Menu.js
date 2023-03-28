import { React } from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { usePizzasContext } from "../providers/PizzasProvider";

function Menu() {
  const pizzas = usePizzasContext() || [];
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {pizzas.map((pizza, key) => {
          return (
            <MenuItem
              key={key}
              //   image={menuItem.image}
              name={pizza.name}
              price={pizza.pub_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
