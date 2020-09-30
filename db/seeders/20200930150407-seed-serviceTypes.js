'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ServiceTypes', [
      r({ serviceCategory: "Massage" }),
      r({ serviceCategory: "Nails" }),
      r({ serviceCategory: "Facials" }),
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('ServiceTypes', null, {});

  }
};
