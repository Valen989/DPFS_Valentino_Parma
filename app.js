const express = require('express')

const methodOverride = require("method-override");

const app = express()

const path = require ('path')

const PORT = 3030

const indexRoutes = require("./src/routers/index.routes")

const productsRoutes = require("./src/routers/products.routes")



app.set('view engine','ejs');
app.set('views',path.join(__dirname,"src", 'views'));

//para que nuestra app entienda lo que viene de los formularios

app.use(express.static(path.join(__dirname,"src","public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));




app.use("/",indexRoutes);

app.use("/productos",productsRoutes);


app.listen(3030,() =>
console.log('servidor corriendo en http://localhost:' + PORT))