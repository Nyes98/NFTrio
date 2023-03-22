const router = require("express").Router();

const user = require("./user");
const nft = require("./nft");

router.use("/user", user);
router.use("/nft", nft);

module.exports = router;
