const express = require("express");
const router = express.Router();

const {
  detail,
  getProducts,
} = require("../../controllers/api/products.apiController");

// Endpoint de productos
router.get("/", getProducts);

// Endpoint de detalle de un producto
router.get("/:id", detail);


module.exports = router;