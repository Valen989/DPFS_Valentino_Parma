const express = require('express')

const app = express()

const path = require ('path')

const PORT = 3030

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/carrito',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/carrito.html'))
})

app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/productos',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/productos.html'))
})

app.get('/registrarse',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.listen(3030,() =>
console.log('servidor corriendo en http://localhost:' + PORT))