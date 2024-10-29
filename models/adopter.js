"use strict";
module.exports = (sequelize, DataTypes) => {
  const Adopter = sequelize.define(
    "Adopter",
    {
      adpotionId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      incomeRangeId: DataTypes.INTEGER,
      livingTypeId: DataTypes.INTEGER,
      familyNumber: DataTypes.INTEGER,
      familyIsAllergic: DataTypes.BOOLEAN,
      familyAgreement: DataTypes.BOOLEAN,
      petNumber: DataTypes.INTEGER,
      hasExperienced: DataTypes.BOOLEAN,
      acceptGuidance: DataTypes.BOOLEAN,
      aloneHours: DataTypes.INTEGER,
      adpotReason: DataTypes.TEXT,
      adoptStatus: DataTypes.STRING,
      isCompleted: DataTypes.BOOLEAN,
    },
    {
      modelName: "Adopter",
      tableName: "Adopters",
      underscored: true,
    }
  );
  Adopter.associate = function (models) {
    // associations can be defined here
    Adopter.belongsTo(models.Adoption, {
      foreignKey: "adpotionId",
    });
    Adopter.belongsTo(models.IncomeRange, {
      foreignKey: "incomeRangeId",
    });
    Adopter.belongsTo(models.LivingType, {
      foreignKey: "livingTypeId",
    });
    Adopter.belongsToMany(models.ActivityArea, {
      through: models.ActivityAreaSelected,
      foreignKey: "adopterId",
      as: "ActivityAreaSelectedAdopters",
    });
  };
  return Adopter;
};
