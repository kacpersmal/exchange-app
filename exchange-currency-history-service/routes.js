const express = require("express");
const { GetLatestHistoryRecords } = require("./db-actions");

const router = express.Router();

router.get("/fetch", async (req, res) => {
  console.log(process.env.EXCHANGE_DATABASE_URL);
  res.send(await GetLatestHistoryRecords(req.params.maxItems));
});

module.exports = router;
