"use strict";
module.exports = (sequelize, DataTypes) => {
  const LivingType = sequelize.define(
    "LivingType",
    {
      type: DataTypes.STRING,
    },
    {
      modelName: "LivingType",
      tableName: "LivingTypes",
      underscored: true,
    }
  );
  LivingType.associate = function (models) {
    // associations can be defined here
    LivingType.hasMany(models.Adopter, {
      foreignKey: "livingTypeId",
    });
  };
  return LivingType;
};
