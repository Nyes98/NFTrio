const Sequelize = require("sequelize");

module.exports = class Stage extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        stageNumber: {
          type: Sequelize.INTEGER,
          unique: true,
          primaryKey: true,
        },
        slot1: {
          type: Sequelize.STRING(255),
        },
        slot2: {
          type: Sequelize.STRING(255),
        },
        slot3: {
          type: Sequelize.STRING(255),
        },
        slot4: {
          type: Sequelize.STRING(255),
        },
        slot5: {
          type: Sequelize.STRING(255),
        },
        slot6: {
          type: Sequelize.STRING(255),
        },
        slot7: {
          type: Sequelize.STRING(255),
        },
        slot8: {
          type: Sequelize.STRING(255),
        },
        slot9: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Stage",
        tableName: "stage",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {}
};
