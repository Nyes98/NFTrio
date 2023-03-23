const router = require("express").Router();

const db = require("../models");

const { User, Character, NFTMarket } = require("../models");

const mint = async ({
  hash,
  img,
  name,
  job,
  gender,
  attack,
  health,
  speed,
  skill,
  owner_address,
}) => {
  const newCharacter = await Character.create({
    hash,
    img,
    name,
    job,
    gender,
    attack,
    health,
    speed,
    skill,
  });
  const curOwner = await User.findOne({
    where: {
      address: owner_address,
    },
  });
  newCharacter.addUser(curOwner);
};

router.post("/mint", (req, res) => {
  mint({ ...req.body });
  res.send("mint success");
});

const getNftCount = async () => {
  console.log("요긴오니");
  const data = await Character.findAndCountAll();

  console.log("개수개수", data);
  return data;
};

const getLatestNft = async (_page, _pageLen, _job, _price) => {
  let whereCondition = {};

  if (_job != 0) {
    whereCondition = { job: _job };
  }

  let orderCondition = [["createdAt", "DESC"]];

  if (_price == 1) {
    orderCondition = [["price", "ASC"]];
  } else if (_price == 2) {
    orderCondition = [["price", "DESC"]];
  }

  const data = await Character.findAll({
    where: whereCondition,
    order: orderCondition,
    offset: _page * _pageLen,
    limit: _pageLen,
  });

  return data;
};

const getAll = async () => {
  const data = await Character.findAll();
  return data;
};

router.post("/recentAll", async (req, res) => {
  const data = await getLatestNft(
    req.body.page,
    req.body.pageLen,
    req.body.job,
    req.body.priceFilter
  );
  res.send(data);
});

// /recentAll router에 통합됨
// router.post("/topPriceNft", async (req, res) => {
//   const data = await getTopPriceNft();
//   res.send(data);
// });

router.post("/nftCount", async (req, res) => {
  const data = await getNftCount();
  res.send(data);
});

router.post("/all", async (req, res) => {
  const data = await getAll();
  res.send(data);
});

module.exports = router;
