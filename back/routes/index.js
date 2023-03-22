const router = require("express").Router();

const user = require("./user");
const images = require("./images");
const nft = require("./nft");

router.use("/user", user);
router.use("/images", images);
router.use("/nft", nft);

module.exports = router;
