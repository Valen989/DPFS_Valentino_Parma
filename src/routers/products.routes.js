const express = require('express');

const {detail, create, list, destroy, edit, } = require("../controllers/products.controllers")



const router = express.Router();

//vista de detalle del producto dinamica
router.get("/:id",detail)
//vista de formulario de creacion
//router.get("/create")
//proceso de creacion  
//router.post("/create")

module.exports = router;