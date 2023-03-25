const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        address: {
          type: Sequelize.STRING(255),
          unique: true,
          primaryKey: true,
        },
        nickName: {
          type: Sequelize.STRING(64),
        },
        image: {
          type: Sequelize.STRING(255),
        },
        frontLine: {
          type: Sequelize.INTEGER,
        },
        formation: {
          type: Sequelize.INTEGER,
        },
        mintNumber: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Character, {
      foreignKey: "owner_address",
      sourceKey: "address",
    });
    db.User.belongsTo(db.Character, {
      foreignKey: "formation_1",
      targetKey: "hash",
    });
    db.User.belongsTo(db.Character, {
      foreignKey: "formation_2",
      targetKey: "hash",
    });
    db.User.belongsTo(db.Character, {
      foreignKey: "formation_3",
      targetKey: "hash",
    });
    db.User.belongsTo(db.Character, {
      foreignKey: "formation_4",
      targetKey: "hash",
    });
    db.User.belongsTo(db.Character, {
      foreignKey: "formation_5",
      targetKey: "hash",
    });
    db.User.belongsTo(db.Character, {
      foreignKey: "formation_6",
      targetKey: "hash",
    });
  }
};
