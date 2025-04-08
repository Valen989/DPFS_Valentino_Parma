const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

module.exports = {
    home:(req,res) => {
        //leer los productos
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        res.render('home',{products});
    },
}