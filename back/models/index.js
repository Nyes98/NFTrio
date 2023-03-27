"use strict";

const Sequelize = require("sequelize");
const User = require("./user");
const Character = require("./character");
const NFTMarket = require("./nftmarket");
const Monster = require("./monster");
const Stage = require("./stage");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = { User, Character, NFTMarket };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

User.init(sequelize);
Character.init(sequelize);
NFTMarket.init(sequelize);
Monster.init(sequelize);
Stage.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
