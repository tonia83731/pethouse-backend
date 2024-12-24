"use strict";
module.exports = (sequelize, DataTypes) => {
  const FindSupply = sequelize.define(
    "FindSupply",
    {
      userId: DataTypes.INTEGER,
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
    FindSupply.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return FindSupply;
};
