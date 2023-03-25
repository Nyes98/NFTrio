const router = require("express").Router();

const user = require("./user");
const images = require("./images");
const nft = require("./nft");
const market = require("./nftmarket");

router.use("/user", user);
router.use("/images", images);
router.use("/nft", nft);
router.use("/nftmarket", market);

module.exports = router;
