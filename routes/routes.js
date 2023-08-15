const express = require("express");
// const Model = require("../models/model");

const router = express.Router();
const products = [];

router.post("/products", async (req, res) => {
  const { name } = req.body;
  const newProduct = { name, id: products.length + 1 };
  products.push(newProduct);

  res.status(201).json(newProduct);
  // const data = new Model({
  //   name: req.body.name,
  //   age: req.body.age,
  // });

  // try {
  //   const dataToSave = await data.save();
  //   res.status(200).json(dataToSave);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
});

router.get("/products", async (req, res) => {
  res.json(products);
  // try {
  //   const data = await Model.find();
  //   res.json(data);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
});

router.get("/products/:id", async (req, res) => {
  const product = products.find(
    (product) => product.id === Number(req.params.id)
  );

  product ? res.json(product) : res.status(404).json({ message: "Not found" });
  // try {
  //   const data = await Model.findById(req.params.id);
  //   res.json(data);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
});

// router.patch("/update/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     const options = { new: true };

//     const result = await Model.findByIdAndUpdate(id, updatedData, options);

//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await Model.findByIdAndDelete(id);
//     res.send(`Document with ${data.name} has been deleted..`);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
