const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { Schema } = require("mongoose");

const { usersHome } = require('../controllers/auth.js');
const { usersProfile } = require('../controllers/auth.js');


// Get userHome
// User home page
// Private
router.get("/userHome", usersHome);

//Get logout
//Logs out current user
// Private
router.get('/logout', function (req, res) {
    req.logout();
    // res.redirect('/');
});

// Get profile/user
// Takes user to their profile page, displays information
// Private
router.get('/profile/user', usersProfile);

// Post auth/save
// Save user game data
// Private
/* router.post('/save', async function (req, res) {
    let bankUpdate = { bank: req.body.bank };
    let filter = { _id: req.user._id };
    let doc = await User.findByIdAndUpdate(filter, bankUpdate, { new: true });
    res.send("success");
  
  }); */

module.exports = router;