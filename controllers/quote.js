const axios = require("axios");

const getQuote = async (req, res) => {
  const srcChainId = req.query.srcChainId;
  const srcQuoteTokenAddress = req.query.srcQuoteTokenAddress;
  const srcQuoteTokenAmount = req.query.srcQuoteTokenAmount;
  const dstChainId = req.query.dstChainId;
  const dstQuoteTokenAddress = req.query.dstQuoteTokenAddress;
  // const slippage = req.query.slippage;

  try {
    const response = await axios.get(
      `${process.env.XY_FINANCE_BASE_URL}/quote?srcChainId=${srcChainId}&srcQuoteTokenAddress=${srcQuoteTokenAddress}&srcQuoteTokenAmount=${srcQuoteTokenAmount}&dstChainId=${dstChainId}&dstQuoteTokenAddress=${dstQuoteTokenAddress}&slippage=1`
    );
    console.log("response", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching recommended tokens:", error);

    res.status(500).json({
      msg: "Failed to fetch quote",
      error: error.message,
    });
  }
};

module.exports = { getQuote };
