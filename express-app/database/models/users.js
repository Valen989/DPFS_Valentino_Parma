module.exports =(sequelize, DataTypes) => {
    const alias= "User"
    const cols={
        name:{
            type:DataTypes.STRING(255),

        },
        surname:{
            type:DataTypes.STRING(255),
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING

        },
        category: {
            type:DataTypes.STRING
        },
        avatar:{
            type:DataTypes.STRING
        }
        };
        const config = {
            tableName: "users",
            timestamps: false,
          };
    const User = sequelize.define(alias, cols, config)

    return User
};


