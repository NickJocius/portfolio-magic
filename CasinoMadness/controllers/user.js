const { body, validationResult } = require("express-validator");
const passport = require("passport"), LocalStrategy = require('passport-local').Strategy;

// require User model
const User = require('../models/User');

//register new user
exports.addNewUser = ([
    // Check if name is filled out
    body("username", "Name is required").not().isEmpty(),
    // Check if email is filled and valid
    body("email", "Please include a valid email").isEmail(),
    // Check if password is valid
    body(
        "password",
        "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
],
    async (req, res, next) => {
        const errors = validationResult(req);
        // check if errors
        if (!errors.isEmpty()) {
            // send 400 bad request
            return res.status(400).json({ errors: errors.array() });
        }

        // Destructure from req.body
        const { username, email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ email });
            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "User already exists" }] });

            }
            // create instance of User Schema
            user = new User({
                username,
                email,
                password,
            });

            User.register({ username: username, email: email }, password, function (err, user) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ err: err });
                    // return res.redirect("/");
                } else {
                    passport.authenticate("local")(req, res, function () {
                        return res.status(200).json({ user });
                        // res.redirect("/auth/userHome");
                    })
                }
            })

        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    });


//user login
exports.login = (
    [
        // Check if email is valid
        body("username", "Please include a valid username").not().isEmpty(),
        // Check if password is valid
        body("password", "Please is required").exists(),
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        // check if errors
        if (!errors.isEmpty()) {
            // send 400 bad request
            return res.status(400).json({ errors: errors.array() });
        }

        // Destructure from req.body
        const { username, password } = req.body;

        // create instance of User Schema
        user = new User({
            username,
            password,
        });

        try {

            req.login(user, function (err) {
                if (err) {
                    return next(err);
                } else {
                    passport.authenticate("local")(req, res, function () {
                        return res.json({ user });
                    });
                }
            })


        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    });