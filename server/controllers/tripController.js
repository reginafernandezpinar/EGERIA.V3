const tripModel = require("../models/tripModel");

//=============== Public routes =====================

// Get all trips
function getAll (req, res) {
    console.log('req', req);
    
    const limit = req.query.limit;
    // get all trips limit by category
    const category = req.query.category
    tripModel.getAll(limit, category, (err, result) => {
        if (err) res.send({message: 'something failed', error: err});
        res.send(result);
    });
};
// Get a trip
function getTripById(req, res) {
    const id = req.params.id;
    tripModel.getTripById(id)
    .then(result => {res.send(result); //=> Promise: resolve
    })
    .catch(err => { //=> Promise: reject
        res.send({message:'something failed', error: err});
    })
};

// function getTripsByCategory(req, res) {
//     const category = req.params.category;
//     tripModel.getTripsByCategory(category)
//     .then(result => {res.send(result); //=> Promise: resolve
//     })
//     .catch(err => { //=> Promise: reject
//         res.send({message:'something failed', error: err});
//     })
// };




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
    getAll,
    getTripById,
    // getTripsByCategory,
    save,
    deleteOne,
    update,
    getUserTrips
};