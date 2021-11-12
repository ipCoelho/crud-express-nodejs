// Imports.
const routes = require('express').Router()
const userController = require('./controller/users')

// Routes.
// routes.get('/user', userController.index)
routes.post('/user', userController.store)
// routes.put('/user', userController.update)
// routes.delete('/user', userController.delete)

module.exports = routes