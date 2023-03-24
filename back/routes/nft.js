const router = require("express").Router();

const { User, Character, NFTMarket } = require("../models");
const { genCreate } = require("../modules/hashlips/hashlips.js");

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
// genCreate("임의의 캐릭터" + Date.now());

module.exports = router;
