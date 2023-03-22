const router = require("express").Router();

const { User, Character, NFTMarket } = require("../models");

const getLatestNft = async (_page, _pageLen) => {
  console.log(_page, _pageLen);
  const data = await Character.findAll({
    order: [["createdAt", "DESC"]],
    offset: _page * _pageLen,
    limit: _pageLen,
  });
  console.log("data", data);
  return data;
};
// const setList = async () => {
//   const characterList = await getLatestNft(0, 10);
//   characterList.map(async (item, index) => {
//     const curCharacter = item;
//     const curMarketList = await NFTMarket.create({ price: 10 - index });
//     curCharacter.addNFTMarket(curMarketList);
//   });
// };

const getTopPriceNft = async () => {
  const data = await NFTMarket.findAll({
    order: [["price", "DESC"]],
    limit: 6,
  });
  return data;
};

router.post("/recentAll", async (req, res) => {
  console.log(req.body);
  const data = await getLatestNft(req.body.page, req.body.pageLen);
  console.log(data);
  res.send(data);
});

router.post("/topPriceNft", async (req, res) => {
  const data = await getTopPriceNft();
  res.send(data);
});

module.exports = router;
