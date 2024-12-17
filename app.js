const express = require('express')

const app = express()

const path = require ('path')

const PORT = 3030

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/cart',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/cart.html'))
})

app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/products',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/productos.html'))
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