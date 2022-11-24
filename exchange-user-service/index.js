const express = require("express");
const app = express();
const router = require("./routes");
require("dotenv").config();

const port = process.env.PORT ?? 3001;

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
