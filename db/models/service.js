'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    ,
    serviceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Service.associate = function (models) {
    Service.belongsTo(models.ServiceType, { foreignKey: 'serviceTypeId' });
    Service.hasMany(models.Appointments, { foreignKey: 'serviceId' });
  };
  return Service;
};