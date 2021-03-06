'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    serviceTypeId: DataTypes.INTEGER
  }, {});
  Employee.associate = function (models) {
    Employee.belongsTo(models.ServiceType, { foreignKey: 'serviceTypeId' });
    Employee.hasMany(models.Appointments, { foreignKey: 'employeeId' });

  };
  return Employee;
};