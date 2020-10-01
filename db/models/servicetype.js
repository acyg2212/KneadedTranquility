'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceType = sequelize.define('ServiceType', {
    serviceCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  ServiceType.associate = function (models) {
    ServiceType.hasMany(models.Service, { foreignKey: 'serviceTypeId' });
    ServiceType.hasMany(models.Employee, { foreignKey: 'serviceTypeId' });
  };
  return ServiceType;
};