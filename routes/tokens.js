const express = require("express");
const router = express.Router();

const { getAllRecommendedTokens } = require("../controllers/tokens");

router.route("/recommendedTokens").get(getAllRecommendedTokens);

module.exports = router;
