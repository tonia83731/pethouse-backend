"use strict";
module.exports = (sequelize, DataTypes) => {
  const Adoption = sequelize.define(
    "Adoption",
    {
      image: DataTypes.STRING,
      amimalTypeId: DataTypes.INTEGER,
      aminalBreedId: DataTypes.INTEGER,
      aminalGenderId: DataTypes.INTEGER,
      aminalSizeId: DataTypes.INTEGER,
      aminalAgeId: DataTypes.INTEGER,
      isVaccinated: DataTypes.BOOLEAN,
      isNeutered: DataTypes.BOOLEAN,
      organizationId: DataTypes.INTEGER,
      isAdopting: DataTypes.BOOLEAN,
    },
    {
      modelName: "Adoption",
      tableName: "Adoptions",
      underscored: true,
    }
  );
  Adoption.associate = function (models) {
    // associations can be defined here
    Volunteer.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    Adoption.belongsTo(models.Adopter, {
      foreignKey: "adpotionId",
    });
    Adoption.belongsTo(models.AnimalAge, {
      foreignKey: "aminalAgeId",
    });
    Adoption.belongsTo(models.AnimalBreeds, {
      foreignKey: "aminalBreedId",
    });
    Adoption.belongsTo(models.AnimalGender, {
      foreignKey: "aminalGenderId",
    });
    Adoption.belongsTo(models.AnimalSize, {
      foreignKey: "aminalSizeId",
    });
  };
  return Adoption;
};
