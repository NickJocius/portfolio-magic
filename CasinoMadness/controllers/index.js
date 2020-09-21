



// new user signup controller
exports.homePage = (req, res) => {

    res.json({ msg: 'home page' });
};

// get draw poker page
exports.drawPoker = (function (req, res, next) {
    const user = req.user;

    if (req.isAuthenticated()) {
        res.cookie('bank', user.bank);
        return res.status(300).json({ user }).send('This is drawPoker Access');
        /* res.render("pages/drawPoker", {
            title: "Casino Madness - 5 Card Draw",
            user: user
        }); */
    } else {
        // res.redirect("/");
        res.status(500).send('Something went wrong');
    }
});

exports.blackJack = (function (req, res, next) {
    const user = req.user;

    if (req.isAuthenticated()) {
        res.cookie('bank', user.bank);
        return res.status(300).json({ user }).send('This is drawPoker Access');
        /*  res.render("pages/blackJack", {
             title: "Casino Madness - Blackjack",
             user: user
         }); */
    } else {
        // res.redirect("/");
        res.status(500).send('Something went wrong');
    }
});