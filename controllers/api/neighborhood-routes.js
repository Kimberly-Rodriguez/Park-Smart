const router = require('express').Router();
const { ParkingSpot, User } = require('../../models');
const withAuth = require('../utils/auth');

// The `/api/ParkingSpot` endpoint

// This will lead us to the main neighborhood/ parking spot location address
// localhost:3001/api/neighborhood
router.get('/', withAuth, async (req, res) => {
  // find all ParkingSpot -- be sure to include its associated Category and Tag data
  try {
    const keyData = await ParkingSpot.findAll({
      include: [{model: User}]
    });
    res.status(200).json(keyData);
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
router.put('/:id', (req, res) => {
  // update ParkingSpot data
  ParkingSpot.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((ParkingSpot) => {
      // find all associated tags from ParkingSpotTag
      return ParkingSpotTag.findAll({ where: { ParkingSpot_id: req.params.id } });
    })
    .then((ParkingSpotTags) => {
      // get list of current tag_ids
      const ParkingSpotTagIds = ParkingSpotTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newParkingSpotTags = req.body.tagIds
        .filter((tag_id) => !ParkingSpotTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            ParkingSpot_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const ParkingSpotTagsToRemove = ParkingSpotTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ParkingSpotTag.destroy({ where: { id: ParkingSpotTagsToRemove } }),
        ParkingSpotTag.bulkCreate(newParkingSpotTags),
      ]);
    })
    .then((updatedParkingSpotTags) => res.status(200).json(updatedParkingSpotTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// no delete OR create route needed, correct?
// what other routes are needed?



module.exports = router;