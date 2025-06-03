const { where } = require("sequelize");
const db = require("../../../database/models");

module.exports = {
  getProducts: async (req, res) => {
    const products = await db.Product.findAll();
      console.log(products);
            
      res.json({
        count:products.length,
        products:products,
      });
  },
  detail: async (req, res) => {
    try {
      // Paso 1
      let prodFound = await db.Product.findByPk(req.params.id);
      // Paso 2
      res.json(prodFound);
    } catch (error) {
      console.log(error);
    }
  },
};
