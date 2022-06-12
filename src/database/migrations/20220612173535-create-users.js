'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true, // atributo unico
        allowNull: false // atributo nao pode ser nulo
      },
      password_hash: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM('admin', 'manager', 'developer'), // campo de tipo STRING que so suporta valores fechados
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('active', 'archived'), // campo de tipo STRING que so suporta valores fechados
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};