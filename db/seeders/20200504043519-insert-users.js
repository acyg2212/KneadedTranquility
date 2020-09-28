'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@example.com', firstName: 'Demo', lastName: 'User', phoneNumber: 5555555555, hashedPassword: createPassword() }),
      r({ email: 'yusuke@example.com', firstName: 'User', lastName: 'Error', phoneNumber: 5318675309, hashedPassword: createPassword() }),
      r({ email: 'petra@example.com', firstName: 'Third', lastName: 'Client', phoneNumber: 1234567890, hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
