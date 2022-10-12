const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const UserModel = require('../models/users')


AdminBro.registerAdapter(AdminBroMongoose)

const AdminBroOptions = {
    resources: [UserModel],
}

console.log("Inside admin bro")

const AdminBroObj = new AdminBro(AdminBroOptions)

const router = AdminBroExpress.buildRouter(AdminBroObj)

module.exports = router;