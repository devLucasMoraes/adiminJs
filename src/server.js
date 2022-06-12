import 'dotenv/config'
import './database'
import express from 'express'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'

import UsersResource from './resources/UsersResource.js'


import locale from './locales'

AdminJS.registerAdapter(AdminJSSequelize)

const port = 8000
const app = express()

const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UsersResource],
    ...locale
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))