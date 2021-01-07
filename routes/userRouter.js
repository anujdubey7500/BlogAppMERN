const usersRouter = require('express').Router()
const userConroller = require('../controllers/userController')
const middleware = require('../utils/middleware')
const userController = require('../controllers/userController')

// get all users
usersRouter.get('/', middleware.verifyToken, userConroller.users_get)

// login user
usersRouter.post('/login', userConroller.user_login)

// register user
usersRouter.post('/', userConroller.user_register)

module.exports = usersRouter