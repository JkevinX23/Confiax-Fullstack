import { Router } from 'express'

import authMiddleware from './app/middlewares/auth'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
 
const routes = new Router()


routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.get('/users', UserController.index)
routes.get('/users/show?:user_id', UserController.show)
routes.post('/users', UserController.store)

export default routes
