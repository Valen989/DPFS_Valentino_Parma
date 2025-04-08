const express = require('express');

const {detail, create, list, destroy, edit, add,update} = require("../controllers/products.controllers")



const router = express.Router();

//vista de detalle del producto dinamica
router.get("/:id",detail)

router.get("/",list)

router.get("/create",create)

router.post("/create",add)

router.get("/:id/edit",edit)

router.put("/edit/:id", update);

router.delete("/delete/:id", destroy);


module.exports = router;