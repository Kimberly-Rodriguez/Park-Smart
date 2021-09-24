const router = require('express').Router();
const userRoutes = require('./user-routes');
const parkingspotRoutes = require('./parkingspot-routes');


router.use('/users', userRoutes);
router.use('/parkingspots', parkingspotRoutes);


module.exports = router;
