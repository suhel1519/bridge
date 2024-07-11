const express = require("express");
const router = express.Router();

const { getTransactionDetails } = require("../controllers/transaction");

router.route("/buildTx").post(getTransactionDetails);

module.exports = router;
