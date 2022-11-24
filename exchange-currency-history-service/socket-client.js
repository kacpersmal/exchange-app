const WebSocket = require("ws");
const { AddExchangeHistoryRecord } = require("./db-actions");
const { NormalizeSocketResponse } = require("./mappers");

const Run = async () => {
  var ws = new WebSocket(process.env.CURRENCY_SOCKET_URL);
  ws.addEventListener("open", (event) => {});
  ws.addEventListener("message", async (event) => {
    console.log("Received new data");
    try {
      await AddExchangeHistoryRecord(
        NormalizeSocketResponse(JSON.parse(event.data))
      );
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = { Run };
