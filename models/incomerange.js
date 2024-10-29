"use strict";
module.exports = (sequelize, DataTypes) => {
  const IncomeRange = sequelize.define(
    "IncomeRange",
    {
      range: DataTypes.STRING,
    },
    {
      modelName: "IncomeRange",
      tableName: "IncomeRanges",
      underscored: true,
    }
  );
  IncomeRange.associate = function (models) {
    // associations can be defined here
    IncomeRange.hasMany(models.Adopter, {
      foreignKey: "incomeRangeId",
    });
  };
  return IncomeRange;
};
