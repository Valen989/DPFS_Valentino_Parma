const express = require('express');

const {home} = require("../controllers/index.controller");


// const indexController = require("../controller/index.controller");

const router = express.Router();


router.get("/",home)

// router.get("/",indexController.home)

module.exports= router;