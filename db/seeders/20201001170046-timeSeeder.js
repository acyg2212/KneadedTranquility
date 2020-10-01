'use strict';



function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Times', [
      r({ time: "9:00a" }),
      r({ time: "9:30a" }),
      r({ time: "10:00a" }),
      r({ time: "10:30a" }),
      r({ time: "11:00a" }),
      r({ time: "11:30a" }),
      r({ time: "12:00" }),
      r({ time: "12:30p" }),
      r({ time: "1:00p" }),
      r({ time: "1:30p" }),
      r({ time: "2:00p" }),
      r({ time: "2:30p" }),
      r({ time: "3:00p" }),
      r({ time: "3:30p" }),
      r({ time: "4:00p" }),
      r({ time: "4:30p" }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Times');
  }
}
