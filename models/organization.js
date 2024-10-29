"use strict";
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    "Organization",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      modelName: "Organization",
      tableName: "Organizations",
      underscored: true,
    }
  );
  Organization.associate = function (models) {
    // associations can be defined here
    Organization.hasMany(models.Volunteer, {
      foreignKey: "organizationId",
    });
    Organization.hasMany(models.Adoption, {
      foreignKey: "organizationId",
    });
    Organization.hasMany(models.Supply, {
      foreignKey: "organizationId",
    });
  };
  return Organization;
};
