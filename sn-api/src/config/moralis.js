const Moralis = require("moralis").default;

async function initMoralis() {
  try {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
    console.log("✅ Moralis initialized successfully");
  } catch (error) {
    console.error("❌ Moralis initialization failed:", error);
  }
}

module.exports = initMoralis;
