"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnimalGender = sequelize.define(
    "AnimalGender",
    {
      gender: DataTypes.STRING,
    },
    {
      modelName: "AnimalGender",
      tableName: "AnimalGenders",
      underscored: true,
    }
  );
  AnimalGender.associate = function (models) {
    // associations can be defined here
    AnimalGender.hasMany(models.Adoption, { foreignKey: "aminalGenderId" });
  };
  return AnimalGender;
};
