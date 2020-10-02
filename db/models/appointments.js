'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    date: DataTypes.DATEONLY,
    employeeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    startTimeId: DataTypes.INTEGER,
    endTimeId: DataTypes.INTEGER
  }, {});
  Appointments.associate = function (models) {
    Appointments.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    Appointments.belongsTo(models.Service, { foreignKey: 'serviceId' });
    Appointments.belongsTo(models.Time, { foreignKey: 'startTimeId' });
  };
  return Appointments;
};