const Sequelize = require("sequelize");

module.exports = class NFTMarket extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        price: {
          type: Sequelize.TEXT,
        },
      },
      {
        sequelize,
        modelName: "NFTMarket",
        tableName: "nftmarket",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.NFTMarket.belongsTo(db.Character, {
      foreignKey: "nft_hash",
      sourceKey: "hash",
    });
  }
};
