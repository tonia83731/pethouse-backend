"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      account: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      weekStart: DataTypes.INTEGER,
      weekEnd: DataTypes.INTEGER,
      openingTime: DataTypes.INTEGER,
      closingTime: DataTypes.INTEGER,
    },
    {
      modelName: "User",
      tableName: "Users",
      underscored: true,
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Furkid, {
      foreignKey: "userId",
    });
    User.hasMany(models.FindSupply, {
      foreignKey: "userId",
    });
    User.hasMany(models.FindVolunteer, {
      foreignKey: "userId",
    });
  };
  return User;
};
