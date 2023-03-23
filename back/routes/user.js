const router = require("express").Router();

const db = require("../models");
const { User, Character, NFTMarket } = require("../models");

// const setList = async () => {
//   const characterList = await getLatestNft(0, 10);
//   characterList.map(async (item, index) => {
//     const curCharacter = item;
//     const curMarketList = await NFTMarket.create({ price: 10 - index });
//     curCharacter.addNFTMarket(curMarketList);
//   });
// };

module.exports = router;
