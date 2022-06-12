import 'dotenv/config'
import './database'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express'

import UsersResource from './resources/UsersResource.js'


AdminJS.registerAdapter(AdminJSSequelize)

const port = 8000
const app = express()

const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UsersResource]
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))