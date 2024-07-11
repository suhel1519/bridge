const express = require("express");
const router = express.Router();

const { getQuote } = require("../controllers/quote");

router.route("/quote").post(getQuote);

module.exports = router;
