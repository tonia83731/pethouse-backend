"use strict";
module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define(
    "Volunteer",
    {
      findVolunteerId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      date: DataTypes.DATE,
      startTime: DataTypes.INTEGER,
      hours: DataTypes.INTEGER,
      needProven: DataTypes.BOOLEAN,
    },
    {
      modelName: "Volunteer",
      tableName: "Volunteers",
      underscored: true,
    }
  );
  Volunteer.associate = function (models) {
    // associations can be defined here
    Volunteer.belongsTo(models.FindVolunteer, {
      foreignKey: "findVolunteerId",
    });
  };
  return Volunteer;
};
