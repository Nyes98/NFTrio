const Sequelize = require("sequelize");

module.exports = class Monster extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(255),
          unique: true,
          primaryKey: true,
        },
        health: {
          type: Sequelize.INTEGER,
        },
        speed: {
          type: Sequelize.INTEGER,
        },
        attack: {
          type: Sequelize.INTEGER,
        },
        skill: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "Monster",
        tableName: "monster",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
