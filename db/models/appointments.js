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
  Appointments.associate = function(models) {
    // associations can be defined here
  };
  return Appointments;
};