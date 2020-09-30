'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Employees', [
      r({ firstName: "Joe", lastName: "Smith", serviceTypeId: 1 }),
      r({ firstName: "Lucy", lastName: "Jones", serviceTypeId: 2 }),
      r({ firstName: "Jane", lastName: "Doe", serviceTypeId: 3 }),
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Employees', null, {});

  }
};
