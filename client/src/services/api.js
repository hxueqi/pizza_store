const getPizzas = () =>
  fetch("/api/pizzas")
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });

const getIngredientsByPizza = (number) =>
  fetch(`/api/pizzas/${number}`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });

const getIngredients = () =>
  fetch(`/api/pizzas/ingredients`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });

const modifyPizza = (data) => {
  return fetch(`/api/pizzas/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
};

export { getPizzas, getIngredientsByPizza, getIngredients, modifyPizza };
