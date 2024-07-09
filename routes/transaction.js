const express = require("express");
const router = express.Router();

const { getTransactionDetails } = require("../controllers/transaction");

router.route("/buildTx").get(getTransactionDetails);

module.exports = router;
