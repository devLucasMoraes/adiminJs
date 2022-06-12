'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    due_date: DataTypes.DATE,
    effort: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    status: DataTypes.ENUM,
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};