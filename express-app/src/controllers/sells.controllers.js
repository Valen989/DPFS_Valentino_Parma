const fs = require("fs")

const path = require("path")

// const productsPath = path.join(__dirname,"..","data", "products.json")

const db = require("../../database/models");




module.exports = {
    create: async (req,res) =>{

  res.render("sells/create");

    },
    add: async (req,res) =>{

        const {
            title,
            color,
            material,
            embroidery,
            size,
            embroideryColor,
            clientPhone,
            clientEmail,
            totalPrice,
        } = req.body

        let newSell = {
        title,
        material,
        color,
        embroidery,
        embroideryColor,
        price,
        clientEmail,
        clientPhone,
        totalPrice,
        };

         await db.Sells.create(newSell);

        res.redirect("/");
        console.log(newSell);
        
    },  

}