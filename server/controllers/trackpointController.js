const trackpointModel = require("../models/trackpointModel");

//=============== Trackpoints Public routes =====================

// Get all trackpoints (by tripId/ by type / featured)
function getAll (req, res) {
    console.log('controller get');
    const limit = req.query.limit;
    const tripId = req.query.tripId;
    const type = req.query.type;
    trackpointModel.getAll(limit, tripId, type, (err, result) => {
        if (err) res.send({message: 'something failed', error: err});
        res.send(result);
    });
};
// Get a trackpoint
function getTrackpointById(req, res) {
    const id = req.params.id;
    trackpointModel.getTrackpointById(id)
    .then(result => {res.send(result); 
    })
    .catch(err => {
        res.send({message:'something failed', error: err});
    })
};

// // Get all trackpoints by category
// function getTrackpointByCategory(req, res) {
//     const category = req.params.category;
//     trackpointModel.getTrackpointByCategory(category)
//     .then(result => {res.send(result);
//     })
//     .catch(err => {
//         res.send({message:'something failed', error: err});
//     })
// };


//============== Trackpoints Protected routes ======================
// user object is saved as req.user in token.

// Get all trackpoints from an user
function getUserTrackpoints (req, res) {
    const userId = req.user.id;
    trackpointModel.getUserTrackpoints(userId)
    .then(result => { // result is an array of user trackpoints
        res.send(result);
    })
    .catch(err => {
        res.send({message:'something failed', error: err});
    });
}
// Create new trackpoint 
function createTrackpoint(req, res) {
    const tp = req.body;
    const userId = req.user.id;
    trackpointModel.createTrackpoint(tp, userId, (err, result) => {
        if (err) res.send({message: 'something failed', error: err});
        else res.send(result);
    });
}
// Delete a trackpoint
function deleteTrackpointById(req, res) {
    const tpId = req.params.id;
    const userId = req.user.id;
    trackpointModel.deleteTrackpointById(tpId, userId)
        .then(result => {res.send(result);
        })
        .catch(err => {
            res.send({message:'something failed', error: err});
        });
}
// Update a trackpoint
function updateTrackpointById(req,res){
    const id = req.params.id;
    const tp = req.body;
    const userId = req.user.id;
    trackpointModel.updateTrackpointById(tp, id, userId)
        .then(result => res.send(result)
        )
        .catch(err =>
            res.send({message:'something failed', error: err})
        );
}


module.exports = {
    getAll,
    getTrackpointById,
    // getTrackpointByCategory,
    createTrackpoint,
    deleteTrackpointById,
    updateTrackpointById,
    getUserTrackpoints
};