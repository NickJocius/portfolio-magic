// Main file to access application
const express = require('express');

const app = express();
const path = require('path');
const helmet = require('helmet');

// Init middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(express.json({ extended: false })); // To enable bodyParser and allow us to get the data in req.body
app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
// Make requests to routes in the api route
app.use('/', require('./routes/index'));
app.use('/results', require('./routes/results'));

app.set('view engine', 'ejs');

// Set PORT
const PORT = process.env.PORT || 5000;

// Confirm server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});