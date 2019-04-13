const dbConn = require('../config/db/mysql');

//cb, Callback, calls controller function

//=============== Public routes =====================

// Get all trips
const getAll = (limit, category, cb) => {
    let sql = `SELECT t.*, u.name AS userName FROM trip t inner join user u on (u.id = t.user_id)`;
    // get all trips by category (limit)
    if (category) {
        sql += ` WHERE t.category = '${category}'`;
    }
    // get featured trips
    if (limit) {
        sql += ` LIMIT ${limit}`;
    }
    dbConn.query (sql, (err, res) => cb (err, res));
};
// Get a trip
const getTripById = id => {
    let sql = `SELECT t.*, u.name AS userName FROM trip t inner join user u on (u.id = t.user_id) WHERE t.id = ${id}`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        })
    });
}
// // Get all trips by category
// const getTripsByCategory = category => {
//     let sql = `SELECT t.*, u.name AS userName FROM trip t inner join user u on (u.id = t.user_id) WHERE t.category = '${category}'`;
//     return new Promise ((resolve, reject) => {
//         dbConn.query(sql, (err, result) => {
//             if (err) reject(err);
//             resolve(result);
//         })
//     });
// }



// ============== Protected routes ======================

// Get all trips from an user
const getUserTrips = userId => {
    let sql = `SELECT * FROM trip where user_id = ${userId}`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}

// Create new trip
const save = (trip, userId, cb) => {
    let sql = `INSERT INTO trip (user_id, public, name, description, companionship, category, starting_point, destination_point, distance, photo) VALUES ('${userId}', '${trip.public}', '${trip.name}', '${trip.description}', '${trip.companionship}', '${trip.category}', '${trip.startingPoint}', '${trip.destinationPoint}', '${trip.distance}', '${trip.photo}')`;
    // console.log(trip.name);
    dbConn.query(sql, function (err, result) {
        if (err) {
            cb(err, null);
        } else {
            let newTrip = {
                id: result.insertId,
                userId: userId,
                public: trip.public,
                name: trip.name,
                description: trip.description,
                companionship: trip.companionship,
                category: trip.category,
                startingPoint: trip.startingPoint,
                destinationPoint: trip.destinationPoint,
                distance: trip.distance,
                photo: trip.photo
            }
            cb(null, newTrip);
        }
    });
}
// Delete a trip
const deleteTripById = (tripId, userId) => {
    let sql = `DELETE FROM trip WHERE id = ${tripId} AND user_id = ${userId}`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}
//const removeTripById = id => trips.splice(trips.findIndex(trip => trip.id == id), 1)
// Update a trip
const updateTripById = (trip, id, userId) => {
    let sql = `UPDATE trip SET public = '${trip.public}', name = '${trip.name}', description = '${trip.description}', companionship = '${trip.companionship}', category = '${trip.category}', starting_point = '${trip.startingPoint}', destination_point = '${trip.destinationPoint}', distance = '${trip.distance}', photo = '${trip.photo}' WHERE id = '${id}' AND user_id = ${userId}`;
    // console.log(trip.name);
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}


module.exports = {
    getAll,
    getTripById,
    // getTripsByCategory, 
    save,
    deleteTripById,
    updateTripById,
    getUserTrips
};