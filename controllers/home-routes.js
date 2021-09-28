const router = require('express').Router();
const { ParkingSpot, User } = require('../models');
const withAuth = require('../utils/auth');
// const colorChange = require('../public/js/neighborhood')

//homepage
router.get('/', (req, res) => {
  try {
    res.render('homepage')
  } catch (err) {
    res.status(500).json(err)
  }
});

//localhost:3001/neighborhood
router.get('/neighborhood', withAuth, async (req, res) => {
  try {
    const spotData = await ParkingSpot.findAll({
      include: [{model: User}]
    });
    const parkingSpots = spotData.map((spot) =>
      spot.get({ plain: true })
    );
    // res.status(200).json(parkingSpots);
    res.render('neighborhood', { parkingSpots , logged_in: req.session.logged_in} )
    // colorChange();
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/neighborhood');
    return;
  }

  res.render('login');
});

router.get('/spot/:id', withAuth, (req, res) => {
  try {
    res.render('spot')
  } catch (err) {
    res.status(500).json(err)
  }
});




module.exports = router;
