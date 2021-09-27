const router = require('express').Router();
const { ParkingSpot, User } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/neighborhood` endpoint

// This will lead us to the main neighborhood/ parking spot location address
// localhost:3001/api/neighborhood
router.get('/', withAuth, async (req, res) => {
  // find all ParkingSpot -- be sure to include its associated Category and Tag data
  try {
    const spotData = await ParkingSpot.findAll({
      include: [{model: User}]
    });
    const parkingSpots = spotData.map((spot) =>
      spot.get({ plain: true })
    );
    // res.render('neighborhood')
    res.status(200).json(parkingSpots);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one ParkingSpot
router.get('/:id', async (req, res) => {
  // find a single ParkingSpot by its `id` -- be sure to include its associated Category and Tag data
  try {
    const keyData = await ParkingSpot.findByPk(req.params.id, {
      // For the line below are we creating through table? and if so, what are we connecting. I only see one model for now
      // include: [{model: Category}, {model: Tag, through: ParkingSpotTag, as: 'tags'}]
    });
    if(!keyData){
      res.status(404).json({message: 'no data found'});
    }
    res.status(200).json({message: 'Success!'});
  } catch (err) {
    res.status(500).json(err)
  }
});


// update ParkingSpot
router.put('/:id', async (req, res) => {
  // update ParkingSpot data
  const updateParkingSpot = await ParkingSpot.update(req.body,
    
    {
      // All the fields you can update and the data attached to the request body.
      spot_taken: req.body.spot_taken,
      time_available: req.body.time_available,
      user_id: req.session.user_id
    },
   {
    where: {
      id: req.params.id
    },
  })
   
    .then((updatedParkingSpotTags) => res.status(200).json(updatedParkingSpotTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});




module.exports = router;