const { check } = require("express-validator");

const loginValidator = [
  check("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("El dato ingresado no corresponde a un email"),
  check("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .bail()
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener almenos 5 caracteres"),
];

const registerValidator = [
  check("name").notEmpty().withMessage("Debes ingresar un nombre"),
   check("surname").notEmpty().withMessage("Debes ingresar un apellido"),
  check("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("El dato ingresado no corresponde a un email"),
    check("category").notEmpty().withMessage("Debes ingresar una categoria para el usuario"),
];


module.exports = { loginValidator, registerValidator };
