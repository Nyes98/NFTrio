const router = require("express").Router();

const { User, Character } = require("../models");

const getLatestNft = async (_limit) => {
  const data = await Character.findAll({
    limit: 10,
  });
  console.log(data);
};
getLatestNft();

module.exports = router;
