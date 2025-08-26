require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initMoralis = require("./config/moralis");

const moralisRoutes = require("./routes/moralis");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/moralis", moralisRoutes);

// Start Server
const PORT = process.env.PORT || 8000;

initMoralis().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
