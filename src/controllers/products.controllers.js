const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

const db = require("../../database/models");


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
    create:(req,res) =>{
        res.render("products/create")
    },
    add: async (req,res) =>{

        const {
            title,
            color,
            decorated,
            colorDecorated,
            price,
        } = req.body

        let newProduct = {
        id: products.length +1 ,
        title,
        color,
        decorated,
        colorDecorated,
        price,
        image: req.file.filename || "imagen_1.jpg"
        };

         await db.Product.create(newProduct);

        res.redirect("/");
        console.log(newProduct);
        
    },  
    list : (req,res) =>{
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        
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
            images,
            price,
          } = req.body;

        let prodFound  = await db.Product.findByPk(req.params.id);

        let prodUpdated = {
        title : title || prodFound.title,

        color : color || prodFound.color,

        price : price || prodFound.price,

        decorated : decorated || prodFound.decorated,

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