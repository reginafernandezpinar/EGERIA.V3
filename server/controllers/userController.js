const userModel = require('../models/userModel');
var crypt = require('../util/auth/crypt-util');
const Token = require('../util/auth/token');


function loginUser(req, res) {
    const userEmail = req.body.email;
    userModel.findUserByEmail(userEmail)
        .then(result => {
            if (result.length !== 1) {
                res.status(401).send({ message: { type: 'error', text: 'bad credentials' } });
            } else {
                const user = result[0]; // result is an array whose first position is the user object.
                const pwd = req.body.password;
                const dbPwd = user.password; //user.password gets the password from the DB, then it is compared against the one introduced
                const cryptPasswd = crypt.encrypt(pwd);
                if (cryptPasswd !== dbPwd) {
                    res.status(401).send({ message: { type: 'error', text: 'bad credentials' } });
                } else {
                    let token = Token.buildToken(user); // create token with the entire object(user) 
                    let userData = {
                        name: user.name,
                        email: user.email,
                        token: token
                    }
                    res.send(userData);
                }
            }
        })
        .catch(err => {
            console.log("error login: " + err);
            res.status(500).send({ message: { color: 'red', text: 'something failed' }, error: err });
        });
}


function registerUser(req, res) {
    let user = req.body;
    user.password = crypt.encrypt(user.password);
    userModel.createUser(user)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send({ message: { color: 'red', text: 'something failed' }, error: err });
        });
}


function whoAmI(req, res) {
    // user is injected in the req object by the verifyToken middleware
    userModel.findUserByEmail(req.user.email)
        .then(result => { // result is an array whose first position is the user object.
            let userData = {
                name: result[0].name,
                email: result[0].email,
                id: result[0].id
            }
            res.send(userData);
        }).catch(err => {
            res.status(500).send({ message: { color: 'red', text: 'something failed' }, error: err });
        });
}


module.exports = {
    loginUser,
    registerUser,
    whoAmI
}