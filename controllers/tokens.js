const axios = require("axios");

const getAllRecommendedTokens = async (req, res) => {
  const id = req.query.id;
  try {
    const response = await axios.get(
      `${process.env.XY_FINANCE_BASE_URL}/recommendedTokens?chainId=${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      msg: "Failed to fetch recommended tokens",
      error: error.message,
    });
  }
};

module.exports = { getAllRecommendedTokens };
