const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

module.exports = {
    detail: (req,res) =>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        const prodFound = products.find((product)=>product.id == req.params.id)
        
        res.render("products/detail",{prodFound })
    },
    create: (req,res) =>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        let newProduct = {
        id: products[products.length - 1].id +1 ,
        name: req.body.nombre,
        color: req.body.color,
        decorado: req.body.decorado,
        color_decorado : req.body.color_decorado,
        image: req.body.imagen,
        price: req.body.precio
        
        }
        products.push(newProduct)
    },
    list : (req,res) =>{
    
    },
    edit: (req,res) =>{

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

    }

}