const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require("../../models/User");

// Controllers
const { addNewUser } = require('../../controllers/user.js');


router.post('/',
    [
        check('username', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
    ], addNewUser);





module.exports = router;