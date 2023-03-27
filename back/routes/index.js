const router = require("express").Router();

const user = require("./user");
const images = require("./images");
const nft = require("./nft");
const market = require("./nftmarket");
const openai = require("./openAI");
const game = require("./game");

router.use("/user", user);
router.use("/images", images);
router.use("/nft", nft);
router.use("/nftmarket", market);
router.use("/openai", openai);
router.use("/game", game);

module.exports = router;
