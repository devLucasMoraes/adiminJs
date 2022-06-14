import { useResource } from "adminjs";
import Sequelize from "sequelize";

import config from '../config/database.js'

import User  from "../models/users.js";
import Project from "../models/project.js";
import Task from "../models/task.js"

const models = [User, Project, Task];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((model) => {
      model.init(this.connection)
    })
  }

  associate() {
    models.forEach((model) => {
      model.associate(this.connection.models)
    })
  }
}

export default new Database();