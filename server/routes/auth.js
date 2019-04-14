var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const Token = require('../util/auth/token')

// It manages http://localhost:3000/api/auth

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// get user data once the user is login and token is saved in Session Storage, so we can use them in case page is reloaded.
router.get('/whoAmI', Token.verifyToken, userController.whoAmI);


// fake logout
router.get('/logout', function (req, res, next) {
    res.redirect('/login');
})

module.exports = router;