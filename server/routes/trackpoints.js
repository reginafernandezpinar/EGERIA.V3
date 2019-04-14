var express = require('express');
var router = express.Router();
const trackpointController = require("../controllers/trackpointController");
const Token = require('../util/auth/token')

// It manages http://localhost:3000/api/trackpoints


//========== Public routes =====================

// Get featured/all trackpoints
router.get('/', trackpointController.getAll);
// Get a trackpoint
router.get('/:id', trackpointController.getTrackpointById);

//============== Protected routes ======================

// Get all trackpoints from an user
router.get('/user/trackpoints', Token.verifyToken, trackpointController.getUserTrackpoints);


// TO DO

// // Delete a trackpoint from an user
// router.delete('/:id', Token.verifyToken, trackpointController.deleteTrackpointById);
// // Update a trackpoint from an user
// router.patch('/:id', Token.verifyToken, trackpointController.updateTrackpointById);
// // Create a new trackpoint as an user
// router.post('/new', Token.verifyToken, trackpointController.createTrackpoint);

module.exports = router;