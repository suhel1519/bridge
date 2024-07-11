const axios = require("axios");

const getTransactionDetails = async (req, res) => {
  const srcChainId = req.query.srcChainId;
  const srcQuoteTokenAddress = req.query.srcQuoteTokenAddress;
  const srcQuoteTokenAmount = req.query.srcQuoteTokenAmount;
  const dstChainId = req.query.dstChainId;
  const dstQuoteTokenAddress = req.query.dstQuoteTokenAddress;
  const slippage = req.query.slippage;
  const receiver = req.query.receiver;
  const bridgeProvider = req.query.bridgeProvider;
  const srcBridgeTokenAddress = req.query.srcBridgeTokenAddress;
  const dstBridgeTokenAddress = req.query.dstBridgeTokenAddress;
  const srcSwapProvider = req.query.srcSwapProvider;
  const dstSwapProvider = req.query.dstSwapProvider;

  let url;

  if (
    srcQuoteTokenAddress !== srcBridgeTokenAddress &&
    dstQuoteTokenAddress !== dstBridgeTokenAddress
  ) {
    url = `${process.env.XY_FINANCE_BASE_URL}/buildTx?srcChainId=${srcChainId}&srcQuoteTokenAddress=${srcQuoteTokenAddress}&srcQuoteTokenAmount=${srcQuoteTokenAmount}&dstChainId=${dstChainId}&dstQuoteTokenAddress=${dstQuoteTokenAddress}&slippage=${slippage}&receiver=${receiver}&bridgeProvider=${bridgeProvider}&srcBridgeTokenAddress=${srcBridgeTokenAddress}&dstBridgeTokenAddress=${dstBridgeTokenAddress}&srcSwapProvider=${srcSwapProvider}&dstSwapProvider=${dstSwapProvider}`;
  } else if (srcQuoteTokenAddress !== srcBridgeTokenAddress) {
    url = `${process.env.XY_FINANCE_BASE_URL}/buildTx?srcChainId=${srcChainId}&srcQuoteTokenAddress=${srcQuoteTokenAddress}&srcQuoteTokenAmount=${srcQuoteTokenAmount}&dstChainId=${dstChainId}&dstQuoteTokenAddress=${dstQuoteTokenAddress}&slippage=${slippage}&receiver=${receiver}&bridgeProvider=${bridgeProvider}&srcBridgeTokenAddress=${srcBridgeTokenAddress}&dstBridgeTokenAddress=${dstBridgeTokenAddress}&srcSwapProvider=${srcSwapProvider}`;
  } else if (dstQuoteTokenAddress !== dstBridgeTokenAddress) {
    url = `${process.env.XY_FINANCE_BASE_URL}/buildTx?srcChainId=${srcChainId}&srcQuoteTokenAddress=${srcQuoteTokenAddress}&srcQuoteTokenAmount=${srcQuoteTokenAmount}&dstChainId=${dstChainId}&dstQuoteTokenAddress=${dstQuoteTokenAddress}&slippage=${slippage}&receiver=${receiver}&bridgeProvider=${bridgeProvider}&srcBridgeTokenAddress=${srcBridgeTokenAddress}&dstBridgeTokenAddress=${dstBridgeTokenAddress}&dstSwapProvider=${dstSwapProvider}`;
  }

  try {
    const response = await axios.get(url);
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

module.exports = { getTransactionDetails };
