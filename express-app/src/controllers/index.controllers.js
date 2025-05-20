const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

module.exports = {
    home:(req,res) => {
        
        res.render('home');
    },
}