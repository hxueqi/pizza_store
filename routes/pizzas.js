var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET all pizzas

router.get("/", async function (req, res) {
  try {
    let pizzas = await db("SELECT * FROM pizzas");
    res.send(pizzas.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET all ingredients

router.get("/ingredients", async function (req, res) {
  try {
    let ingredients = await db("SELECT * FROM ingredients");
    res.send(ingredients.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET all ingredients by pizza_id

router.get("/:number", async function (req, res) {
  try {
    let result = await db(`
    SELECT ingredients.name, ingredients.price, ingredients.id, ingredients_by_pizza.id AS ingredientIndex
    FROM pizzas 
      INNER JOIN ingredients_by_pizza  ON (ingredients_by_pizza.pizza_id = pizzas.id)
      INNER JOIN ingredients  ON (ingredients_by_pizza.ingredient_id = ingredients.id)
    WHERE pizzas.id = ${req.params.number}
    ORDER BY ingredients_by_pizza.id`);
    let ingredients = result.data;
    if (ingredients.length === 0) {
      res
        .status(404)
        .send({ error: "There is no pizza with the requested id" });
    } else {
      res.send(ingredients);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// POST more ingredients to a pizza

router.post("/update", async function (req, res) {
  let { added, removed, total_price, pizza_id } = req.body;
  try {
    if (added.length) {
      const sqlValuesToAdd = added
        .map(({ ingredient_id }) => `(${pizza_id}, ${ingredient_id})`)
        .join(",");
      let resultsAdded = await db(
        `INSERT INTO ingredients_by_pizza (pizza_id, ingredient_id) VALUES ${sqlValuesToAdd}`
      );
    }
    if (removed.length) {
      let resultsRemoved = await db(
        `DELETE FROM ingredients_by_pizza WHERE id IN(${removed
          .map(({ id }) => id)
          .join(",")})`
      );
    }

    let resultsUpdate = await db(
      `UPDATE pizzas SET pub_price = ${Number(total_price).toFixed(
        2
      )} WHERE id = ${pizza_id}`
    );

    let pizzas = await db("SELECT * FROM pizzas");
    res.status(201).send(pizzas.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
