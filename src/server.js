import 'dotenv/config'
import './database'
import express from 'express'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'

import UsersResource from './resources/UsersResource.js'
import ProjectsResource from './resources/ProjectsResource.js'
import TasksResource from './resources/TasksResource.js'


import locale from './locales'

AdminJS.registerAdapter(AdminJSSequelize)

const port = 8000
const app = express()

const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    dashboard: {
        component: AdminJS.bundle('./components/Dashboard/index.jsx')
    },
    resources: [UsersResource, ProjectsResource, TasksResource],
    branding: {
        companyName: 'Task Manager',
        logo: false,
        softwareBrothers: false,
    },
    ...locale
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))