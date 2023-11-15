const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Likes extends Model {};

const Likes = sequelize.define('Likes', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Restaurant',
            key: 'id'
        }
    }
});

// Associations
User.belongsToMany(Restaurant, { through: Likes });
Restaurant.belongsToMany(User, { through: Likes });


Likes.init();