const router = require("express").Router();

const db = require("../models");
const { User, Character, NFTMarket } = require("../models");

const setUser = async (_address) => {
  const data = await User.create({
    address: _address,
    nickname: _address,
  });

  return data;
};

router.post("/regist", async (req, res) => {
  try {
    if (
      await User.findOne({
        where: { address: req.body.address },
      })
    ) {
      res.end();
    } else {
      const data = await setUser(req.body.address);
      res.send(data);
    }
  } catch (error) {
    console.error(error);
    res.end();
  }
});

module.exports = router;
