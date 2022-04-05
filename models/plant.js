const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    common_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    latin_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_submitted: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        },
    },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'comment_id',
            key: 'id',
            unique: false
        },
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
    }
)

module.exports = Plant;