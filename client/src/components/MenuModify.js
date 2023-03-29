import { useEffect, useState } from "react";
import { usePizzasContext } from "../providers/PizzasProvider";
import { modifyPizza } from "../services/api";

const getRequest = (currentSelection, original, pizza_id) => {
  return Object.keys({ ...currentSelection, ...original }).reduce(
    (request, id) => {
      if (original[id] && !currentSelection[id]) {
        request.removed.push({ id: Number(original[id].ingredientIndex) });
      }
      if (!original[id] && currentSelection[id]) {
        request.added.push({
          ingredient_id: Number(id),
        });
      }
      if (currentSelection[id]) {
        request.total_price += Number(currentSelection[id].price);
      }
      return request;
    },
    { added: [], removed: [], total_price: 0, pizza_id }
  );
};
const MenuModify = ({
  ingredients,
  id: pizza_id,
  onToggle,
  setIngredients,
}) => {
  const { ingredients: allIngredientes, setPizzas } = usePizzasContext() || [];
  const [original, setOriginal] = useState({});
  const [currentSelection, setCurrentSelection] = useState({});

  useEffect(() => {
    const selectedIngredients = ingredients.reduce((memo, ingredient) => {
      memo[ingredient.id] = ingredient;
      return memo;
    }, {});
    setOriginal({ ...selectedIngredients });
    setCurrentSelection({ ...selectedIngredients });
  }, [ingredients]);

  const onSave = () => {
    const request = getRequest(currentSelection, original, pizza_id);
    modifyPizza(request)
      .then((data) => {
        setPizzas(data || []);
        setIngredients([]);
        onToggle(0);
      })
      .catch((error) => console.log(error));
  };

  const onToggleIngredient = (ingredient) => {
    if (currentSelection[ingredient.id]) {
      delete currentSelection[ingredient.id];
      setCurrentSelection({ ...currentSelection });
    } else {
      setCurrentSelection({
        ...currentSelection,
        [ingredient.id]: ingredient,
      });
    }
  };

  return (
    <div className="menuModifyIngredients scroll-shadows">
      {allIngredientes.map((ingredient, key) => (
        <button
          className={
            currentSelection[ingredient.id]
              ? "ingredient included"
              : "ingredient"
          }
          key={key}
          onClick={() => onToggleIngredient(ingredient)}
        >
          <span>{ingredient.name}</span> <span>{ingredient.price} €</span>
        </button>
      ))}

      <div className="menuButtonGroup">
        <button className="menuFooterButton" onClick={onSave}>
          Save
        </button>
        <button className="menuFooterButton" onClick={() => onToggle(0)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default MenuModify;
