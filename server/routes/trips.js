var express = require('express');
var router = express.Router();
const tripController = require ('../controllers/tripController');
const Token = require('../util/auth/token');


// It manages http://localhost:3000/api/trips

//========== Public routes =====================

// Get featured/all trips
router.get('/', tripController.getAll);
// Get a trip
router.get('/:id', tripController.getTripById);




//============== Protected routes ======================

// Get all trips from an user
router.get('/user/trips', Token.verifyToken, tripController.getUserTrips);
// Delete a trip from an user
router.delete('/:id', Token.verifyToken, tripController.deleteOne);
// Update a trip from an user
router.patch('/:id', Token.verifyToken, tripController.update);
// Create a new trip as an user
router.post('/new', Token.verifyToken, tripController.save);


module.exports = router;
