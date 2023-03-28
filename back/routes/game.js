const router = require("express").Router();
const fs = require("fs");
const { User } = require("../models");
const Monster = require("../models/monster");
const Stage = require("../models/stage");
const basePath = process.cwd();

router.post("/getSkill", async (req, res) => {
  const skillList = await JSON.parse(
    fs.readFileSync(basePath + "/config/skill.json")
  );
  res.send(skillList);
});

const setMonsterDB = () => {
  const monster = JSON.parse(
    fs.readFileSync(basePath + "/config/monster.json")
  );

  for (let i = 0; i < monster.length; ++i) {
    try {
      Monster.create({
        ...monster[i],
      });
    } catch (err) {
      console.log(err);
    }
  }
};

const setStageDB = () => {
  const stage = JSON.parse(fs.readFileSync(basePath + "/config/stage.json"));

  for (let i = 0; i < stage.length; ++i) {
    try {
      Stage.create({
        stageNumber: i,
        ...stage[i],
      });
    } catch (err) {
      console.log(err);
    }
  }
};

// setMonsterDB();
// setStageDB();

const getMonsterData = async (_monsterName) => {
  const curMonster = await Monster.findOne({ where: { name: _monsterName } });
  return curMonster;
};

const getStage = async (_stage) => {
  const curStage = await Stage.findOne({
    where: { stageNumber: _stage },
  });
  return curStage;
};

router.post("/getMonsterByName", async (req, res) => {
  const curMonster = await getMonsterData(req.body.monsterName);
  res.send(curMonster);
});

router.post("/getStage", async (req, res) => {
  const curStage = await getStage(req.body.stage);
  console.log(curStage);
  res.send(curStage);
});

module.exports = router;
