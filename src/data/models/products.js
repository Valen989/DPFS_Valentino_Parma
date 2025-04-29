

module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        name: {
          type: DataTypes.STRING(255),
          validate: {
            min: 3,
          },
        },

        }
    return Product;
};