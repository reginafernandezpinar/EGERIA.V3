const dbConn = require('../config/db/mysql');


//=============== Trackpoints Public routes =====================

// Get all trackpoints (by tripId/ by type / featured)
const getAll = (limit, tripId, type, cb) => {
    let sql = `SELECT * FROM trackpoint`;
    // get all trips by tripId 
    if (tripId) {
        sql += ` WHERE trip_id = ${tripId}`;
        if (type) {
            sql += ` AND type = '${type}'`;
        }
    } else {
        // get all trips by type
        if (type) {
            sql += ` WHERE type = '${type}'`;
        }
    }
    // get featured trackpoints
    if (limit) {
        sql += ` LIMIT ${limit}`;
    }
    dbConn.query (sql, (err, res) => cb (err, res));
};

// Get a trackpoint
const getTrackpointById = id => {
    let sql = `SELECT * FROM trackpoint WHERE id = ${id}`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        })
    });
}



// ============== Trackpoints Protected routes ======================

// Get all Trackpoints from a trip from an user
const getUserTrackpoints = (userId) => {
    let sql = `SELECT tp.*, u.name AS userName FROM trackpoint tp
        inner join trip t on (tp.trip_id = t.id) AND t.user_id = ${userId}`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}



module.exports = {
    getAll,
    getTrackpointById,
    getUserTrackpoints,
};
