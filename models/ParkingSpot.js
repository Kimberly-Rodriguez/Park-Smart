const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ParkingSpot extends Model {}

ParkingSpot.init(
    {

    }
);

module.exports = ParkingSpot;