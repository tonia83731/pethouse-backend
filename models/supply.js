"use strict";
module.exports = (sequelize, DataTypes) => {
  const Supply = sequelize.define(
    "Supply",
    {
      organizationId: DataTypes.INTEGER,
      sendAddress: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      supplyName: DataTypes.STRING,
      supplyNumber: DataTypes.INTEGER,
      note: DataTypes.TEXT,
    },
    {
      modelName: "Supply",
      tableName: "Supplies",
      underscored: true,
    }
  );
  Supply.associate = function (models) {
    // associations can be defined here
    Supply.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    Supply.belongsTo(models.SupplyCategory, {
      foreignKey: "categoryId",
    });
  };
  return Supply;
};
