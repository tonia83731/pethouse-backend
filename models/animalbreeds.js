"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnimalBreeds = sequelize.define(
    "AnimalBreeds",
    {
      animalTypeId: DataTypes.INTEGER,
      breeds: DataTypes.STRING,
    },
    {
      modelName: "AnimalBreed",
      tableName: "AnimalBreeds",
      underscored: true,
    }
  );
  AnimalBreeds.associate = function (models) {
    // associations can be defined here
    AnimalBreeds.belongsTo(models.AnimalType, {
      foreignKey: "animalTypeId",
    });
    AnimalBreeds.hasMany(models.Adoption, { foreignKey: "aminalBreedId" });
  };
  return AnimalBreeds;
};
