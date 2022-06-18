import 'dotenv/config'
import './database'
import express from 'express'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'

import UsersResource from './resources/UsersResource.js'
import ProjectsResource from './resources/ProjectsResource.js'
import TasksResource from './resources/TasksResource.js'

import User from './models/users'

import locale from './locales'
import theme from './theme.js'


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
        theme,
    },
    ...locale
})

//const router = AdminJSExpress.buildRouter(adminJs)
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email }})

        if (user && (await user.checkPassword(password)) ){
            return user
        }
        return false
    },
    cookiePassword: process.env.SECRET,
})

app.use(adminJs.options.rootPath, router)
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))