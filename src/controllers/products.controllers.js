const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

module.exports = {
    detail: (req,res) =>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        const prodFound = products.find((product)=>product.id == req.params.id)
        
        if (prodFound) {
            res.render("products/detail",{prodFound })
        }
    },
    create: (req,res) =>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        const {
            name,
            color,
            decorado,
            color_decorado,
            iamge,
            price,

        } = req.body

        let newProduct = {
        id: products[products.length - 1].id +1 ,
        name,
        color,
        decorado,
        color_decorado ,
        image ,
        price,

        }
        products.push(newProduct)

        fs.writeFileSync(productsPath,JSON.stringify(products, null, " "))

        res.redirect("/")
    },  
    list : (req,res) =>{
    
    },
    edit: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        let prodFound = products.find((prod) => prod.id == req.params.id);
        res.render("products/edit", { prodFound });

    },
    update: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

        const {
            name,
            color,
            decorado,
            color_decorado,
            image,
            price,
          } = req.body;

        let prodFound  = products.find((prod) => prod.id == req.params.id);

        prodFound.name = name || prodFound.name;

        prodFound.color = color || prodFound.color;

        prodFound.price = price || prodFound.price;

        prod.found.decorado = decorado || prodFound.decorado;

        prodFound.color_decorado = color_decorado || prodFound.color_decorado;

        prodFound.image = req.file?.filename || prodFound.image;

        fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));

        res.redirect("/");


    },
    destroy: (req,res) =>{
        //traer listado de productos
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        //eliminar imagen
        let productToDelete = products.find((prod)=>prod.id==req.params.id)
        if (productToDelete.image != "default.png") {
            fs.unlinkSync(
                path.join(
                    __dirname,
                    "../public/images/products"+productToDelete.image,
                )
            )
        }
        //actualizar el listado de produtos
        products = products.filter((prod)=>prod.id !=req.params.id)

        // sobreescribir json
    fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));

     // Redireccionar
     res.redirect("/");
    }

}