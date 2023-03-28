const db = require("../models/index.js");
const { NFTMarket, Character } = require("../models/index.js");
const Web3 = require("web3");

const web3 = new Web3(
  "wss://goerli.infura.io/ws/v3/5b7557d9e628400c80aff9dafb24fe45"
);
const saleToken = require("../contracts/artifacts/SaleToken.json");
const characterToken = require("../contracts/artifacts/CharacterToken.json");
const trioToken = require("../contracts/artifacts/TrioToken.json");
const swapToken = require("../contracts/artifacts/Swap.json");
const { env } = require("process");

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

const getApprove = async (_price, _account) => {
  const deployed = new web3.eth.Contract(trioToken.abi, process.env.TRIO_CA);
  const obj = {
    from: "",
    to: "",
    data: "",
  };
  obj.from = _account;
  obj.to = process.env.TRIO_CA; // 데이터를 수정할 사람
  obj.data = deployed.methods.approve(process.env.SALE_CA, _price).encodeABI();
  return obj;
};

const NftBuy = async (_tokenId, _account) => {
  const deployed = new web3.eth.Contract(saleToken.abi, process.env.SALE_CA);

  const obj = {
    from: "",
    to: "",
    data: "",
  };
  obj.from = _account;
  obj.to = process.env.SALE_CA;
  obj.data = deployed.methods.PurchaseToken(_tokenId).encodeABI();
  return obj;
};

router.post("/sell", async (req, res) => {
  console.log("glsdjgklsdnflksdnfkls", req.body);
  const data = await SellNft(req.body.price, req.body.selHash);
  console.log("다이다타", data);
  res.send(data);
});

router.post("/list", async (req, res) => {
  const data = await getSaleList();
  res.send(data);
});

router.post("/buy", async (req, res) => {
  const data = await buyNft(req.body.hash, req.body.price);
  const approve = await getApprove(req.body.price, req.body.account);
  const buy = await NftBuy(req.body.tokenId, req.body.account);

  res.send({ approve: approve, buy: buy });
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
