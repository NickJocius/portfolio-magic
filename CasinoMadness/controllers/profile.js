/* const User = require("../models/User");

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

    }); */