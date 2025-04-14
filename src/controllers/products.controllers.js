const fs = require("fs")

const path = require("path")

const productsPath = path.join(__dirname,"..","data", "products.json")

module.exports = {
    detail: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        let prodFound = products.find((product)=>product.id == req.params.id)
        
        res.render("products/detail",{prodFound})
    },
    create:(req,res) =>{
        res.render("products/create")

    },
    add: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))


        let newProduct = {
        id: products.length +1 ,
        title : req.body.title,
        color: req.body.color,
        decorated: req.body.decorated,
        colorDecorated: req.body.colorDecorated,
        price: req.body.price,
    
        };
        products.push(newProduct);

        fs.writeFileSync(productsPath,JSON.stringify(products, null, " "));

        res.redirect("/")
        console.log(newProduct);
        
    },  
    list : (req,res) =>{
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        
         res.render('products',{products});
    },
    edit: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))

        let prodFound = products.find((prod)=>prod.id == req.params.id)
        
        res.render("products/edit",{prodFound})

    },
    update: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

        const {
            title,
            color,
            decorated,
            colorDecorated,
            images,
            price,
          } = req.body;

        let prodFound  = products.find((prod) => prod.id == req.params.id);

        prodFound.title = title || prodFound.title;

        prodFound.color = color || prodFound.color;

        prodFound.price = price || prodFound.price;

        prodFound.decorated = decorated || prodFound.decorated;

        prodFound.color_decorated = colorDecorated || prodFound.colorDecorated;

        
        

        // prodFound.images = req.file?.filename || prodFound.images;

        fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));

        res.redirect("/");


    },
    destroy: (req,res) =>{
        //traer listado de productos
        let products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        //eliminar imagen
        let productToDelete = products.find((prod)=>prod.id==req.params.id)
       /*
        if (productToDelete.image != "default.png") {
            fs.unlinkSync(
                path.join(
                    __dirname,
                    "../public/images/products"+productToDelete.image,
                )
            )
        }*/
        //actualizar el listado de produtos
        products = products.filter((prod)=>prod.id !=req.params.id)

        // sobreescribir json
    fs.writeFileSync(productsPath, JSON.stringify(products, null, "  "));

     // Redireccionar
     res.redirect("/");
    }

}