const sequelize = require('../config/connection');
const { User, ParkingSpot } = require('../models');

const userData = require('./userData.json');
const parkingData = require('./parkingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const spot of parkingData) {
    await ParkingSpot.create({
      ...spot,
    });
  }

  process.exit(0);
};

seedDatabase();
