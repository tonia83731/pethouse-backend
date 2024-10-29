"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnimalType = sequelize.define(
    "AnimalType",
    {
      type: DataTypes.STRING,
    },
    {
      modelName: "AnimalType",
      tableName: "AnimalTypes",
      underscored: true,
    }
  );
  AnimalType.associate = function (models) {
    // associations can be defined here
    AnimalType.hasMany(models.AnimalBreeds, {
      foreignKey: "animalTypeId",
    });
  };
  return AnimalType;
};
