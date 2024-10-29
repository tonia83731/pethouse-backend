"use strict";
module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define(
    "Volunteer",
    {
      organizationId: DataTypes.INTEGER,
      volunteerNumber: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      introduction: DataTypes.TEXT,
      minWorkHrs: DataTypes.INTEGER,
    },
    {
      modelName: "Volunteer",
      tableName: "Volunteers",
      underscored: true,
    }
  );
  Volunteer.associate = function (models) {
    // associations can be defined here
    Volunteer.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
  };
  return Volunteer;
};
