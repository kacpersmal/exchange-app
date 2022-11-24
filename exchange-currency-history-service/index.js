const express = require("express");
const app = express();
const router = require("./routes");
require("dotenv").config();

const port = process.env.PORT ?? 3001;

const SocketClient = require("./socket-client");
SocketClient.Run();

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
