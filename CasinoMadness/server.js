require('dotenv').config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/User');

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const authRouter = require("./routes/auth");

const app = express();

// App use
app.use(logger("dev"));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false
}));

//Init middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ extended: false }));

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1:27017/casino_users";
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Define routes
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/auth", authRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
