'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Employees' },
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' },
      },
      serviceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Services' },
      },
      startTimeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Times' },
      },
      endTimeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Times' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Appointments');
  }
};