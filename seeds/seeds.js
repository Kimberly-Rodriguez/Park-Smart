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

  for (const project of parkingData) {
    await ParkingSpot.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
