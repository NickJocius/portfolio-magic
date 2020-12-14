const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();


//app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Db connected'))
    .catch(err => console.log(`Db connection error: ${err}`));

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes middleware
fs.readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)));

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})