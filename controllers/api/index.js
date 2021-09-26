const router = require('express').Router();
const userRoutes = require('./user-routes');
const parkingspotRoutes = require('./neighborhood-routes');


router.use('/users', userRoutes);
router.use('/neighborhood', parkingspotRoutes);


module.exports = router;
