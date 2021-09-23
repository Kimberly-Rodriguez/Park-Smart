const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ParkingSpot extends Model { }

ParkingSpot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        spot_taken: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        time_available: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'parkingspot'
    }
);

module.exports = ParkingSpot;