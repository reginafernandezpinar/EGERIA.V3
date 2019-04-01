const tripModel = require("../models/tripModel");

//=============== Public routes =====================

// Get featured/all trips
function findAll (req, res) {
    tripModel.findAll(req.query.limit, (err, result) => {
        if (err) res.send({message: 'something failed', error: err});
        res.send(result);
    });
}
// Get a trip
function findOne(req, res) {
    console.log('findOne');
    const id = req.params.id;
    tripModel.findTripById(id)
    .then(result => {res.send(result); //=> Promise: resolve
    })
    .catch(err => { //=> Promise: reject
        res.send({message:'something failed', error: err});
    })
}


//============== Protected routes ======================
// user object is saved as req.user in token.

// Get all trips from an user
function getUserTrips (req, res) {
    const userId = req.user.id;
    tripModel.getUserTrips(userId)
    .then(result => { // result is an array of user trips
        res.send(result);
    })
    .catch(err => {
        res.send({message:'something failed', error: err});
    });
}
// Create new trip 
function save(req, res) {
    console.log('save req.body', req.body);
    const trip = req.body;
    const userId = req.user.id;
    tripModel.save(trip, userId, (err, result) => {
        if (err) res.send({message: 'something failed', error: err});
        else res.send(result);
    });
}
// Delete a trip
function deleteOne(req, res) {
    const tripId = req.params.id;
    const userId = req.user.id;
    tripModel.deleteTripById(tripId, userId)
        .then(result => {res.send(result);
        })
        .catch(err => {
            res.send({message:'something failed', error: err});
        });
}
// Update a trip
function update(req,res){
    const id = req.params.id;
    const trip = req.body;
    const userId = req.user.id;
    tripModel.updateTripById(trip, id, userId)
        .then(result => res.send(result)
        )
        .catch(err =>
            res.send({message:'something failed', error: err})
        );
}


module.exports = {
    findAll,
    findOne,
    save,
    deleteOne,
    update,
    getUserTrips
};