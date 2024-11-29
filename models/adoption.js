"use strict";
module.exports = (sequelize, DataTypes) => {
  const Adoption = sequelize.define(
    "Adoption",
    {
      furkidId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      occupation: DataTypes.STRING,
      income: DataTypes.STRING,
      houseType: DataTypes.STRING,
      livingArea: DataTypes.STRING,
      familyNumber: DataTypes.INTEGER,
      isAgree: DataTypes.BOOLEAN,
      isAllergic: DataTypes.BOOLEAN,
      hasPet: DataTypes.BOOLEAN,
      hasExperienced: DataTypes.BOOLEAN,
      hasSkills: DataTypes.BOOLEAN,
      acceptTraining: DataTypes.BOOLEAN,
      aloneHour: DataTypes.INTEGER,
      reason: DataTypes.TEXT,
    },
    {
      modelName: "Adoption",
      tableName: "Adoptions",
      underscored: true,
    }
  );
  Adoption.associate = function (models) {
    // associations can be defined here
    Adoption.belongsTo(models.Furkid, {
      foreignKey: "furkidId",
    });
  };
  return Adoption;
};
