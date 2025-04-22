const express = require("express");
const {
  login,
  register,
  processRegister,
  processLogin,
  profile,
  logout,
} = require("../controllers/users.controller");

const { uploadUser } = require("../middlewares/multer");
const guestAuth = require("../middlewares/guestAuth");
const loggedAuth = require("../middlewares/loggedAuth");
const { loginValidator } = require("../middlewares/validator");

const router = express.Router();

// Formulario de inicio de sesión
router.get("/login", loggedAuth, login);
router.post("/login",loginValidator, processLogin);
// Formulario de registro
router.get("/register",loggedAuth, register);
router.post("/register", uploadUser.single("avatar"), processRegister);

router.get("/profile", guestAuth, profile);

router.get("/logout", guestAuth, logout);


module.exports = router;
