'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      due_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      effort: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      order: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM(
          'backlog',
          'doing',
          'done',
          'approved',
          'rejected'
        ),
        defaultValue: 'backlog',
      },
      path: {
        type: Sequelize.STRING
      },
      folder: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      project_id: {
        type: Sequelize.INTEGER,
        references: {model: 'projects', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      created_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_At: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};