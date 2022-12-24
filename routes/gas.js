const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (_req, res) => {
  let config = {
    headers: {
      accept: "application/json",
      "accept-encoding": "*",
    },
  };

  try {
    let response = await axios.get("https://etherchain.org/api/gasnow", config);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
