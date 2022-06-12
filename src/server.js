import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

const app = express()

const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))