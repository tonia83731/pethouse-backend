"use strict";
module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define(
    "Partner",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      weekStart: DataTypes.STRING,
      weekEnd: DataTypes.STRING,
      openingTime: DataTypes.TIME,
      closingTime: DataTypes.TIME,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      modelName: "Partner",
      tableName: "Partners",
      underscored: true,
    }
  );
  Partner.associate = function (models) {
    // associations can be defined here
    Partner.hasMany(models.Furkid, {
      foreignKey: "partnerId",
    });
    Partner.hasMany(models.FindSupply, {
      foreignKey: "partnerId",
    });
    Partner.hasMany(models.FindVolunteer, {
      foreignKey: "partnerId",
    });
  };
  return Partner;
};
