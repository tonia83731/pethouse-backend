"use strict";
module.exports = (sequelize, DataTypes) => {
  const ActivityAreaSelected = sequelize.define(
    "ActivityAreaSelected",
    {
      adopterId: DataTypes.INTEGER,
      areaId: DataTypes.INTEGER,
    },
    {
      modelName: "ActivityAreaSelected",
      tableName: "ActivityAreaSelectedes",
      underscored: true,
    }
  );
  ActivityAreaSelected.associate = function (models) {
    // associations can be defined here
  };
  return ActivityAreaSelected;
};
