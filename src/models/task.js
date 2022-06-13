'use strict';

import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init({
      due_date: DataTypes.DATE,
      effort: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      order: DataTypes.INTEGER,
      status: DataTypes.ENUM(
        'backlog',
        'doing',
        'done',
        'approved',
        'rejected'
      ),
      user_id: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER
    }, {
      sequelize,
      name: {
        singular: 'task',
        plural: 'tasks'
      }
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    this.belongsTo(models.Project, {
      foreignKey: 'project_id'
    })
  }
}


export default Task