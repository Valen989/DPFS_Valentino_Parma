module.exports =(sequelize, DataTypes) => {
    const alias= "Sells"
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
        size:{
            type:DataTypes.STRING
        },
        clientPhone:{
            type:DataTypes.INTEGER
        },
        clientEmail:{
            type:DataTypes.STRING
        },
        totalPrice:{
            type:DataTypes.INTEGER
        }
        };
        const config = {
            tableName: "sells",
            paranoid: true,
          };
    const Sells = sequelize.define(alias, cols, config)

    return Sells
};