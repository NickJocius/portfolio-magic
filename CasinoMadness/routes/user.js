const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const passport = require("passport"), LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User");

// Controllers
const { addNewUser } = require('../controllers/user.js');
const { login } = require('../controllers/user.js');

//Get users/new
// User Sign up form page
// Public
router.get("/new", function (req, res, next) {
    // res.render("pages/new", { title: "Casino Madness - Sign Up" });
});

//Get users/login
// User login
// Public
router.get("/login", function (req, res, next) {
    // res.render("pages/login", { title: "Casino Madness - Login" });
});

// Post users
// Register user add to database
// Public
router.post("/new", addNewUser);

// Post auth
// authenticate user and get token
// Public
router.post("/login", login);



module.exports = router;