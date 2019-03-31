var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const Token = require('../util/auth/token')

// It manages http://localhost:3000/api/auth

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
// router.get('/', Token.verifyToken, userController.whoAmI); en el /login traemos la info del usuario


// fake logout
router.get('/logout', function (req, res, next) {
    res.redirect('/login');
})

module.exports = router;