const { json } = require("express");
const express = require("express");
const router = express.Router();

const { homePage } = require('../controllers/index.js');

/* GET home page. */
router.get("/", homePage);

/* GET drawPoker page. */


/* GET blackJack page. */





module.exports = router;
