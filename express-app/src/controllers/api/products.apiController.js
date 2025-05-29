const { where } = require("sequelize");
const db = require("../../../database/models");

module.exports = {
  getProducts: async (req, res) => {
    let products = await db.Product.findAll({
      include: ["title", "size", "filament"],
      attributes: {
        exclude: ["size_id", "filament_id", "title_id"],
        include: [
          [
            db.sequelize.literal(
              `CONCAT('${process.env.SV_HOST}:${process.env.PORT}/images/products/', Product.image)`
            ),
            "urlAvatar",
          ],
          [
            db.sequelize.literal(
              `CONCAT('${process.env.SV_HOST}:${process.env.PORT}/api/products/detail/', Product.id)`
            ),
            "url",
          ],
        ],
      },
      // raw: true,
    });

    let countByTitle = await db.Product.findAll({
      attributes: [
        "title",
        [db.sequelize.fn("COUNT", db.sequelize.col("Product.id")), "count"],
      ],
      include: [
        {
          model: db.title,
          as: "title",
          attributes: ["name"],
        },
      ],
      group: ["title_id", "title.id"],
      raw: true,
    });

    // Transformar a objeto
    let countObject = {};
    countByTitle.forEach((item) => {
      countObject[item["title.name"]] = parseInt(item.count);
    });

    res.json({
      count: products.length,
      countByTitle: countObject,
      products: products,
    });
  },
  detail: async (req, res) => {
    try {
      // Paso 1
      let prodFound = await db.Product.findByPk(req.params.id, {
        include: ["title", "size", "filament"],
        attributes: {
          exclude: ["size_id", "filament_id", "title_id"],
        },
      });
      // Paso 2
      res.json(prodFound);
    } catch (error) {
      console.log(error);
    }
  },
  lastProduct: async (req, res) => {
    try {
      // Paso 1
      let prodFound = await db.Product.findOne({
        include: ["title", "size", "filament"],
        attributes: {
          exclude: ["size_id", "filament_id", "title_id"],
        },
        order: [["id", "DESC"]],
      });
      // Paso 2
      res.json(prodFound);
    } catch (error) {
      console.log(error);
    }
  },
};
