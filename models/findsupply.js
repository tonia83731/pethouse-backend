"use strict";
module.exports = (sequelize, DataTypes) => {
  const FindSupply = sequelize.define(
    "FindSupply",
    {
      partnerId: DataTypes.INTEGER,
      supplyName: DataTypes.STRING,
      number: DataTypes.INTEGER,
      introduction: DataTypes.TEXT,
    },
    {
      modelName: "FindSupply",
      tableName: "FindSupplies",
      underscored: true,
    }
  );
  FindSupply.associate = function (models) {
    // associations can be defined here
    FindSupply.belongsTo(models.Partner, {
      foreignKey: "partnerId",
    });
  };
  return FindSupply;
};
