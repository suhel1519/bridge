const express = require("express");
const router = express.Router();

const { getQuote } = require("../controllers/quote");

router.route("/quote").get(getQuote);

module.exports = router;
