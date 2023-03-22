const router = require("express").Router();

const user = require("./user");
const images = require("./images");

router.use("/user", user);
router.use("/images", images);

module.exports = router;
