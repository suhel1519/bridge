const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const tokens_route = require("./routes/tokens");
const quote_routes = require("./routes/quote");
const transaction_routes = require("./routes/transaction");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", tokens_route);
app.use("/api", quote_routes);
app.use("/api", transaction_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started at PORT: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
