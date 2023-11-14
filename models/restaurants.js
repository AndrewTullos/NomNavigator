const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Restaurant extends Model {};

Restaurant.init(    
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        liked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);