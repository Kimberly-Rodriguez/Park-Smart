const ParkingSpot = require ('./neighborhood');
const User = require ('./User');

ParkingSpot.belongsTo(User, {
    foreignKey: 'user_id'
  });

User.hasOne(ParkingSpot, {
    foreignKey: 'user_id'
  })  

module.exports = {ParkingSpot, User};