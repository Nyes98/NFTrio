const router = require("express").Router();

const db = require("../models");
const { User, Character, NFTMarket } = require("../models");

const setUser = async (_address) => {
  const data = await User.create({
    address: _address,
    nickName: _address,
    mintNumber: 3,
  });

  return data;
};

router.post("/call", async (req, res) => {
  try {
    console.log("##############", req.body);
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
    console.log("여긴왔지롱");
    // User.update(
    //   { mintNumber: mintNumber - 1 },
    //   { where: { address: req.body.account } }
    // );
    res.end();
  } catch (error) {
    console.error(error);
    res.end();
  }
});
module.exports = router;
