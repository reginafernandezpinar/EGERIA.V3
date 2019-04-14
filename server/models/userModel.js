const dbConn = require('../config/db/mysql');


const findUserByEmail = userEmail => {
    let sql = `SELECT * FROM user WHERE email = '${userEmail}'`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}


const createUser = user => {
    let sql = `INSERT INTO user (email, name, password) VALUES ('${user.email}', '${user.name}', '${user.password}')`;
    return new Promise ((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}



module.exports = {
    findUserByEmail,
    createUser
}