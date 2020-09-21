const User = require("../models/User");
const { Schema } = require("mongoose");
const { body, validationResult } = require("express-validator");
const passport = require("passport"), LocalStrategy = require('passport-local').Strategy;

// get users home page
exports.usersHome = (function (req, res, next) {
    if (req.isAuthenticated()) {
        //   res.render("pages/userHome", { title: "Casino Madness - Home" })
        res.json({ user: req.user._id });

    } else {
        //   res.redirect("/");
        res.status(500).send('User not authenticated');
    }
});

// get users profile page
exports.usersProfile = (
    function (req, res) {

        if (req.isAuthenticated()) {
            const user = req.user;
            //   res.render("pages/profile", { title: "Casino Madness - Profile", user: user });
            return res.json({ user });

        } else {
            //   res.redirect("/userHome");
            res.send('User not authenticated');
        }

    });