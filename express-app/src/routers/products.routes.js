const express = require('express');

const {detail, create, list, destroy, edit, add,update} = require("../controllers/products.controller")

const { uploadProd } = require("../middlewares/multer");

const router = express.Router();


router.get("/detalle/:id",detail)

router.get("/",list)

router.get("/crear",create)

router.post("/crear", uploadProd.single("image"),add)

router.get("/edit/:id", uploadProd.single("image"),edit)

router.put("/edit/:id", update);

router.delete("/delete/:id", destroy);


module.exports = router;