const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT ?? 3001;

const SocketClient = require("./socket-client");
SocketClient.Run();

app.use(cors({ origin: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`History service listening on port ${port}`);
});
