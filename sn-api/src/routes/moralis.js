const express = require("express");
const Moralis = require("moralis").default;
const router = express.Router();

// Example endpoint → fetch ETH balance of an address
router.get("/balance/:address", async (req, res) => {
  try {
    const { address } = req.params;

    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    const response = await Moralis.EvmApi.balance.getNativeBalance({
      address,
      chain: "0x1", // Ethereum mainnet
    });

    res.json({
      address,
      balance: response.result.balance.ether, // balance in ETH
    });
  } catch (error) {
    console.error("Error fetching balance:", error);
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

module.exports = router;
