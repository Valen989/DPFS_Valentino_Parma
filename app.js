const express = require('express')

const app = express()

const path = require ('path')

const PORT = 3030

const indexRoutes = require("./src/routers/index.routes")

const productsRoutes = require("./src/routers/products.routes")



app.set('view engine','ejs');
app.set('views',path.join(__dirname,"src", 'views'));

//para que nuestra app entienda lo que viene de los formularios
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"src","public")))


app.use(express.static(path.join(__dirname,"src", 'public')));

app.use("/",indexRoutes)

app.use("/productos",productsRoutes)


app.get('/cart',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/cart.html'))
})

app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/products',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/products.html'))
})

app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/about.html'))
})

app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/contact.html'))
})


app.listen(3030,() =>
console.log('servidor corriendo en http://localhost:' + PORT))