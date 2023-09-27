const { DataTypes } = require("sequelize")
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.TEXT,
            defaultValue: ""
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "https://i.postimg.cc/rFPhm4CM/avatar.png"
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false
    })
}


