const express = require('express')

const methodOverride = require("method-override");

const cookieParser = require("cookie-parser");

const session = require("express-session");

const app = express()

const path = require ('path')

const userLogged = require("./src/middlewares/userLogged");

const PORT = 3030

const db = require("./database/models");

const cors = require("cors");

app.use(cors());



app.set('view engine','ejs');
app.set('views',path.join(__dirname,"src", 'views'));




app.use(express.static(path.join(__dirname,"src","public")));

app.use(
    session({ secret: "EstoEsunSecreto", saveUninitialized: true, resave: true })
);

app.use(cookieParser());

//para que nuestra app entienda lo que viene de los formularios
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.use(userLogged);


const usersRoutes = require("./src/routers/users.routes")

const indexRoutes = require("./src/routers/index.routes")

const productsRoutes = require("./src/routers/products.routes");
const { Sequelize } = require('sequelize');


app.use("/",indexRoutes);

app.use("/productos",productsRoutes);

app.use("/users",usersRoutes)


app.use(function (req, res) {
    res.status(404).render("not-found.ejs", { title: "No encontrado" });
  });


app.listen(3030,async() =>{

/*
await db.sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");*/


console.log('servidor corriendo en http://localhost:' + PORT)})