const db = require("../models/index.js");
const { NFTMarket } = require("../models/index.js");

const router = require("express").Router();
require("../modules/hashlips/hashlips.js");

const getSaleList = async () => {
  const data = await NFTMarket.findAll({
    include: {
      model: db.Character,
    },
  });
  return data;
};

router.post("/list", async (req, res) => {
  const data = await getSaleList();
  res.send(data);
});

module.exports = router;
