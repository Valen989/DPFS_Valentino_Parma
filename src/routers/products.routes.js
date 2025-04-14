const express = require('express');

const {detail, create, list, destroy, edit, add,update} = require("../controllers/products.controllers")



const router = express.Router();


router.get("/detalle/:id",detail)

router.get("/",list)

router.get("/crear",create)

router.post("/crear",add)

router.get("/edit/:id",edit)

router.put("/edit/:id", update);

router.delete("/delete/:id", destroy);


module.exports = router;