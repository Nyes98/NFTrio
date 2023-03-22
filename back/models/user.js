const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(64),
        },
        userPw: {
          type: Sequelize.STRING(64),
        },
        userEmail: {
          type: Sequelize.STRING(64),
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

  //   static associate(db) {
  //     db.Recruit.belongsTo(db.Companyuser_Info, {
  //       // as: "RecruitMaker",
  //       targetKey: "companyId",
  //       foreignKey: "company",
  //     });

  //     db.Recruit.belongsToMany(db.Individualuser_Info, {
  //       through: "personalRecruit",
  //       as: "RecruitInfo",
  //       foreignKey: "recruitId",
  //       sourceKey: "id",
  //       onDelete: "cascade",
  //     });
  //   }
};
