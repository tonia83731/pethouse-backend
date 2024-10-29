"use strict";
module.exports = (sequelize, DataTypes) => {
  const ActivityArea = sequelize.define(
    "ActivityArea",
    {
      area: DataTypes.STRING,
    },
    {
      modelName: "ActivityArea",
      tableName: "ActivityAreas",
      underscored: true,
    }
  );
  ActivityArea.associate = function (models) {
    // associations can be defined here
    ActivityArea.belongsToMany(models.Adopter, {
      through: models.ActivityAreaSelected,
      foreignKey: "areaId",
      as: "ActivityAreaSelectedAreas",
    });
  };
  return ActivityArea;
};
