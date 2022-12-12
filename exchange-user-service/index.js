const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT ?? 3001;

app.use(cors({ origin: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});
