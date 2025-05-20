const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

const db = require("../../database/models");

const { where } = require("sequelize");


module.exports = {
    detail: async (req,res) =>{
         //* Ok
    try {
        // Paso 1
        let prodFound = await db.Product.findByPk(req.params.id);
        // Paso 2
        res.render("products/detail", { prodFound });
      } catch (error) {
        console.log(error);
      }
    },
    create: async (req,res) =>{

    

  res.render("products/create");

    },
    add: async (req,res) =>{

        const {
            title,
            color,
            material,
            embroidery,
            size,
            embroideryColor,
            price,
        } = req.body

        let newProduct = {
        title,
        material,
        color,
        embroidery,
        size,
        embroideryColor,
        price,
        image: req.file.filename || "imagen_1.jpg"
        };

         await db.Product.create(newProduct);

        res.redirect("/");
        console.log(newProduct);
        
    },  
    list : async (req,res) =>{
        let products = await db.Product.findAll();
        console.log(products);
        
         res.render('products',{products});
    },
    edit: async (req, res) => {
        //* Ok
    let prodFound = await db.Product.findByPk(req.params.id);
    res.render("products/edit", { prodFound });

    },
    update: async (req, res) => {
       
      try{
        const {
            title,
            color,
            decorated,
            colorDecorated,
            size,
            images,
            price,
          } = req.body;

        let prodFound  = await db.Product.findByPk(req.params.id);

        let prodUpdated = {
        title : title || prodFound.title,

        color : color || prodFound.color,

        price : price || prodFound.price,

        decorated : decorated || prodFound.decorated,

        size: size || prodFound.size,

        color_decorated : colorDecorated || prodFound.colorDecorated,

        images : req.file.filename || prodFound.images,

        }

        
        

        

        

        res.redirect("/");
    }catch (error) {
      console.log(error);
      }
    },
    destroy: async (req,res) =>{
        
    //* Ok
    /*     
    // Opcional para otro caso
    let productToDelete = await db.Product.findByPk(req.params.id);
    if (productToDelete.image != "default.png") {
      fs.unlinkSync(
        path.join(
          __dirname,
          `../public/images/products/${productToDelete.image}`
        )
      );
    }
       */
            const productDelete = await db.Product.destroy({
                where: {
                  id: req.params.id,
                },
              });
          
              console.log("prodBorrado", productDelete);

     // Redireccionar
     res.redirect("/");
    }

}