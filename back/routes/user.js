const router = require("express").Router();

const db = require("../models");
const { User, Character, NFTMarket, sequelize } = require("../models");

const setUser = async (_address) => {
  const data = await User.create({
    address: _address,
    nickName: _address,
    mintNumber: 3,
    isApprove: 0,
  });

  return data;
};

router.post("/call", async (req, res) => {
  try {
    const data = await User.findOne({
      where: { address: req.body.address },
    });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.end();
  }
});

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

router.post("/getStage", async (req, res) => {
  console.log(req.body);
  const curUser = await User.findOne({
    where: {
      address: req.body.account,
    },
  });
  console.log(curUser);
  res.send(curUser?.frontLine);
});

router.post("/useTicket", async (req, res) => {
  try {
    User.update(
      { mintNumber: req.body.mintNumber - 1 },
      { where: { address: req.body.account } }
    );
    res.send({ status: "이얏호우" });
  } catch (error) {
    console.error(error);
    res.end();
  }
});
module.exports = router;
