"use strict";
module.exports = (sequelize, DataTypes) => {
  const SupplyCategory = sequelize.define(
    "SupplyCategory",
    {
      name: DataTypes.STRING,
    },
    {
      modelName: "SupplyCategory",
      tableName: "SupplyCategories",
      underscored: true,
    }
  );
  SupplyCategory.associate = function (models) {
    // associations can be defined here
    SupplyCategory.hasMany(models.Supply, {
      foreignKey: "categoryId",
    });
  };
  return SupplyCategory;
};
