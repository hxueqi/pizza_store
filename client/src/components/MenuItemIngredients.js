const MenuItemIngredients = ({ ingredients, onToggle }) => {
  return (
    <div className="menuIngredients scroll-shadows">
      {ingredients.map(({ name, price }, key) => (
        <p className="ingredient" key={key}>
          <span>{name}</span> <span>{price} €</span>
        </p>
      ))}

      <div className="menuButtonGroup">
        <button className="menuFooterButton" onClick={() => onToggle(0)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default MenuItemIngredients;
