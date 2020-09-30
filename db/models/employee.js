'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    serviceTypeId: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};