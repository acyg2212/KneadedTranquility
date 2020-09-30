'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Services', [
      r({ serviceName: "Swedish Massage", serviceTypeId: 1 }),
      r({ serviceName: "Deep Tissue Massage", serviceTypeId: 1 }),
      r({ serviceName: "Manicure", serviceTypeId: 2 }),
      r({ serviceName: "Pedicure", serviceTypeId: 2 }),
      r({ serviceName: "Vitamin C", serviceTypeId: 3 }),
      r({ serviceName: "Age Correction", serviceTypeId: 3 }),
    ], {});
  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('Services', null, {});

  }
};
