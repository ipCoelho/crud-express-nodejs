'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*** Example: */
    await queryInterface.createTable('users', { 

      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },

      name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      
      username: { 
        type: Sequelize.STRING,
        allowNull: false
      },

      password: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      
      email: { 
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('users');
  }
};
