'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceType = sequelize.define('ServiceType', {
    serviceCategory: DataTypes.STRING,
    allowNull: false,
  }, {});
  ServiceType.associate = function (models) {
    // associations can be defined here
  };
  return ServiceType;
};