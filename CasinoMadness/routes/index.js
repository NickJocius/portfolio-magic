const { json } = require("express");
const express = require("express");
const router = express.Router();

const { homePage } = require('../controllers/index.js');
const { drawPoker } = require('../controllers/index.js');
const { blackJack } = require('../controllers/index.js');

/* GET home page. */
router.get("/", homePage);

/* GET drawPoker page. */
router.get("/drawPoker", drawPoker);

/* GET blackJack page. */
router.get("/blackJack", blackJack);




module.exports = router;
