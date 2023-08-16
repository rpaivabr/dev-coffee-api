const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const products = [];

const findProduct = (id) => products.find((product) => product.id === id);
const addProduct = (productToAdd) => products.push(productToAdd);
const deleteProduct = (id) =>
  (products = [...products.filter((product) => product.id !== id)]);
const replaceProduct = (productToReplace) =>
  (products = [
    productToReplace,
    ...products.filter((product) => product.id !== productToReplace.id),
  ]);

router.post("/products", async (req, res) => {
  const { name, description, price, tags } = req.body;
  const productToCreate = {
    id: uuidv4(),
    name,
    description,
    price,
    tags,
  };
  addProduct(productToCreate);

  res.status(201).json(productToCreate);
});

router.get("/products", async (req, res) => {
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = findProduct(req.params.id);

  if (!product) res.status(404).json({ message: "Not found" });

  res.json(product);
});

router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = findProduct(req.params.id);

  if (!product) res.status(404).json({ message: "Not found" });

  const { name, description, price, tags } = req.body;
  const productToEdit = {
    id,
    name,
    description,
    price,
    tags,
  };
  replaceProduct(productToEdit);

  res.json(productToEdit);
});

router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = findProduct(req.params.id);

  if (!product) res.status(404).json({ message: "Not found" });

  deleteProduct(id);
  res.status(204).json();
});

module.exports = router;
