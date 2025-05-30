
module.exports =(sequelize, DataTypes) => {
    const alias= "Product"
    const cols={
        title:{
            type:DataTypes.STRING(255),

        },
        material:{
            type:DataTypes.STRING

        },
        color:{
            type:DataTypes.STRING

        },
        embroidery:{
            type:DataTypes.STRING
        },
        embroideryColor:{
            type:DataTypes.STRING
        },
        image:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        size:{
            type:DataTypes.STRING
        },
        };
        const config = {
            tableName: "products",
            paranoid: true,
          };
    const Product = sequelize.define(alias, cols, config)

    return Product
};



