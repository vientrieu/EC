'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{name: 'Samsung'},
      {name: 'Iphone'},
      {name: 'Other'}
    ];
    data.map(item=>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
      return queryInterface.bulkInsert('categories', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
  }
};
