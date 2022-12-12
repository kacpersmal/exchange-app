const express = require("express");
const { GetUserWallet, CreateUserWallet } = require("./db-actions");
const router = express.Router();

router.get("/wallets/:user_id", async (req, res) => {
  const userId = req.params["user_id"];

  const userWallet = await GetUserWallet(userId);
  if (userWallet) {
    res.send(userWallet);
    return;
  }

  try {
    await CreateUserWallet(userId);
    res.send(await GetUserWallet(userId));
    return;
  } catch (error) {
    res
      .statusCode(500)
      .send({ message: "Could not create and fetch user wallet" });
    return;
  }
});

module.exports = router;
