"use strict";
module.exports = (sequelize, DataTypes) => {
  const Furkid = sequelize.define(
    "Furkid",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      animal: DataTypes.STRING,
      size: DataTypes.STRING,
      age: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      isNeutured: DataTypes.BOOLEAN,
      isVaccinated: DataTypes.BOOLEAN,
      avatar: DataTypes.STRING,
    },
    {
      modelName: "Furkid",
      tableName: "Furkids",
      underscored: true,
    }
  );
  Furkid.associate = function (models) {
    // associations can be defined here
    Furkid.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Furkid.hasMany(models.Adoption, { foreignKey: "furkidId" });
  };
  return Furkid;
};
