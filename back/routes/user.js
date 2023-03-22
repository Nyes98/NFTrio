const router = require("express").Router();

const { User, Character } = require("../models");

const getLatestNft = async (_page, _pageLen) => {
  const data = await Character.findAll({
    order: [["createdAt", "DESC"]],
    offset: _page * _pageLen,
    limit: _pageLen,
  });
  return data;
};

router.post("/recentAll", async (req, res) => {
  const data = await getLatestNft(req.body.page, req.body.pageLen);
  res.send(data);
});

module.exports = router;
