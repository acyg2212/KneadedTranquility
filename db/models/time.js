'use strict';
module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Time.associate = function (models) {
    Time.hasMany(models.Appointments, { foreignKey: 'startTimeId' });
  };
  return Time;
};