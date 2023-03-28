var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET all pizzas

router.get("/", async function (req, res) {
  try {
    console.log('hola')
    let pizzas = await db("SELECT * FROM pizzas");
    res.send(pizzas.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET by pizza_id

router.get("/featured/:pizza_id", async function (req, res) {
  let pizza_id = req.params.pizza_id;
  try {
    let result = await db(`SELECT * FROM  pizzas WHERE id=${pizza_id}`);
    let pizza = result.data[0];
    if (pizza.length === 0) {
      res
        .status(404)
        .send({ error: "There is no pizza with the requested id" });
    } else {
      res.send(pizza);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// // POST

// router.post("/", async function (req, res) {
//   // The request's body is available in req.body
//   let { name, pub_price } = req.body; //insert array for stops
//   // sql syntax is tested & correct
//   console.log(req.body);
//   let sql = `
//       INSERT INTO pizzas (name, pub_price)
//       VALUES ('${name}', '${pub_price}');
//       SELECT last_insert_id()
//       `;

//   //constructor of the sql
//   try {
//     let results = await db(sql); //adds item
//     //foreach stop in array, insert into stops table
//     let result = await db("SELECT * FROM pizzas"); //get the list of items
//     // let newItems = result.data;
//     res.status(201).send(result.data[result.data.length - 1]);
//     // send data to client
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// // DELETE

// router.delete("/delete/:pizza_id", async (req, res) => {
//   // URL params are available in req.params
//   let pizza_id = req.params.pizza_id;
//   try {
//     // get item with id matching req params
//     let result = await db(`SELECT * FROM pizzas WHERE id = ${pizza_id}`);
//     // if this returns nothing, id doesn’t exist: throw an error
//     if (result.data.length === 0) {
//       res.status(404).send({ error: "item not found" });
//     } else {
//       // delete item with id matching req params
//       await db(`DELETE FROM pizzas WHERE id = ${pizza_id}`);
//       // save result to result variable
//       let result = await db(`SELECT * FROM pizzas`);
//       // send result data to client and return server status
//       res.status(200).send(result.data);
//     }
//     // if try fails, catch with 500 error
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

// //UPDATE pizza as complete

// router.patch("/:pizza_id/done", async function (req, res, next) {
//   let pizza_id = req.params.pizza_id;
//   let completed = req.body;

//   try {
//     await db(
//       `UPDATE pizzas SET done=${completed.done} WHERE id=${pizza_id}`
//     );
//     let completedTrip = await db(
//       `SELECT * FROM pizzas WHERE id=${pizza_id}`
//     );
//     res.status(201).send(completedTrip.data);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

module.exports = router;
