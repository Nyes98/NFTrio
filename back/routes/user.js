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

router.post("/setUserFormation", async (req, res) => {
  const { account, formationIndex, characterHash } = req.body;
  switch (formationIndex) {
    case 0:
      await User.update(
        { formation_1: characterHash },
        { where: { address: account } }
      );
      break;
    case 1:
      await User.update(
        { formation_2: characterHash },
        { where: { address: account } }
      );
      break;
    case 2:
      await User.update(
        { formation_3: characterHash },
        { where: { address: account } }
      );
      break;
    case 3:
      await User.update(
        { formation_4: characterHash },
        { where: { address: account } }
      );
      break;
    case 4:
      await User.update(
        { formation_5: characterHash },
        { where: { address: account } }
      );
      break;
    case 5:
      await User.update(
        { formation_6: characterHash },
        { where: { address: account } }
      );
      break;
    default:
      break;
  }
  res.end();
});

router.post("/clearUserFormation", async (req, res) => {
  const { account, hash, formationIndex } = req.body;

  const curCharacter = await Character.findOne({ where: { hash: hash } });
  const curUser = await User.findOne({ where: { address: account } });
  console.log(curCharacter, curUser);
  switch (formationIndex) {
    case 0:
      await User.update({ formation_1: null }, { where: { address: account } });
      break;
    case 1:
      await User.update({ formation_2: null }, { where: { address: account } });
      break;
    case 2:
      await User.update({ formation_3: null }, { where: { address: account } });
      break;
    case 3:
      await User.update({ formation_4: null }, { where: { address: account } });
      break;
    case 4:
      await User.update({ formation_5: null }, { where: { address: account } });
      break;
    case 5:
      await User.update({ formation_6: null }, { where: { address: account } });
      break;
    default:
      break;
  }
  res.end();
});

router.post("/getCharacterList", async (req, res) => {
  const data = await User.findOne({
    where: { address: req.body.account },
    include: {
      model: db.Character,
    },
  });
  console.log(data);
  res.send(data);
});

router.post("/setFrontLine", async (req, res) => {
  const data = await User.update(
    { frontLine: req.body.stage },
    {
      where: {
        address: req.body.account,
      },
    }
  );
  res.send(data);
});

module.exports = router;
