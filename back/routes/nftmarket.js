const db = require("../models/index.js");
const { NFTMarket, Character } = require("../models/index.js");

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

const buyNft = async (_hash, _price) => {
  try {
    const data = await NFTMarket.destroy({
      where: { nft_hash: _hash },
    });

    Character.update(
      { price: 0, cost: _price },
      {
        where: { hash: _hash },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const SellNft = async (_price, _hash) => {
  const marketData = await NFTMarket.findOne({ where: { nft_hash: _hash } });

  if (marketData) {
    await NFTMarket.update({ price: _price }, { where: { nft_hash: _hash } });
    await Character.update({ price: _price }, { where: { hash: _hash } });
    return { status: 202, msg: "가격 수정 완료" };
  }

  const data = await NFTMarket.create({ price: _price });
  const hashData = await Character.findOne({ where: { hash: _hash } });

  await Character.update({ price: _price }, { where: { hash: _hash } });
  await hashData.addRegistSellList(data);

  return data;
};

const getNftCost = async (_hash) => {
  const data = await NFTMarket.findOne({
    where: { nft_hash: _hash },
  });
  return data;
};

const getHistory = async (_hash) => {
  const data = await NFTMarket.findAll({
    where: { nft_hash: _hash },
    paranoid: false,

    order: [["deletedAt", "DESC"]],
  });
  return data;
};

router.post("/sell", async (req, res) => {
  const data = await SellNft(req.body.price, req.body.selHash);
  res.send(data);
});

router.post("/list", async (req, res) => {
  const data = await getSaleList();
  res.send(data);
});

router.post("/buy", async (req, res) => {
  const data = await buyNft(req.body.hash, req.body.price);
  res.end();
});

router.post("/cost", async (req, res) => {
  const data = await getNftCost(req.body.hash);
  res.send(data);
});

router.post("/history", async (req, res) => {
  const data = await getHistory(req.body.hash);
  res.send(data);
});

module.exports = router;
