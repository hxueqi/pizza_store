const getPizzas = () => fetch("/api/pizzas")
  .then((res) => res.json())
  .catch((error) => {
    throw new Error(error);
  });

export default getPizzas;
