const router = require('express').Router();
const { ParkingSpot, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  try {
    res.render('homepage')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/neighborhood', withAuth, (req, res) => {
  try {
    res.render('neighborhood')
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
