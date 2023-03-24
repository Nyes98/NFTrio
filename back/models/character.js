const Sequelize = require("sequelize");

module.exports = class Character extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        hash: {
          type: Sequelize.STRING(255),
        },
        img: {
          type: Sequelize.STRING(255),
        },
        name: {
          type: Sequelize.STRING(64),
        },
        job: {
          type: Sequelize.STRING(64),
        },
        gender: {
          type: Sequelize.INTEGER,
        },
        attack: {
          type: Sequelize.INTEGER,
        },
        health: {
          type: Sequelize.INTEGER,
        },
        speed: {
          type: Sequelize.INTEGER,
        },
        skill: {
          type: Sequelize.STRING(255),
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Character",
        tableName: "character",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Character.belongsTo(db.User, {
      foreignKey: "owner_address",
      sourceKey: "address",
    });
    db.Character.hasMany(db.NFTMarket, {
      foreignKey: "nft_hash",
      targetKey: "hash",
    });
    db.Character.hasMany(db.User, {
      foreignKey: "formation_1",
      targetKey: "hash",
    });
    db.Character.hasMany(db.User, {
      foreignKey: "formation_2",
      targetKey: "hash",
    });
    db.Character.hasMany(db.User, {
      foreignKey: "formation_3",
      targetKey: "hash",
    });
    db.Character.hasMany(db.User, {
      foreignKey: "formation_4",
      targetKey: "hash",
    });
    db.Character.hasMany(db.User, {
      foreignKey: "formation_5",
      targetKey: "hash",
    });
    db.Character.hasMany(db.User, {
      foreignKey: "formation_6",
      targetKey: "hash",
    });
  }
};
