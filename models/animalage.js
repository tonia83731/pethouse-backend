"use strict";
module.exports = (sequelize, DataTypes) => {
  const AnimalAge = sequelize.define(
    "AnimalAge",
    {
      age: DataTypes.STRING,
    },
    {
      modelName: "AnimalAge",
      tableName: "AnimalAges",
      underscored: true,
    }
  );
  AnimalAge.associate = function (models) {
    // associations can be defined here
    AnimalAge.hasMany(models.Adoption, { foreignKey: "aminalAgeId" });
  };
  return AnimalAge;
};
