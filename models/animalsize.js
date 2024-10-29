"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnimalSize = sequelize.define(
    "AnimalSize",
    {
      size: DataTypes.STRING,
    },
    {
      modelName: "AnimalSize",
      tableName: "AnimalSizes",
      underscored: true,
    }
  );
  AnimalSize.associate = function (models) {
    // associations can be defined here
    AnimalSize.hasMany(models.Adoption, { foreignKey: "aminalSizeId" });
  };
  return AnimalSize;
};
