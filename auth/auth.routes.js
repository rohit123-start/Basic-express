import express from 'express'
import { authresponse } from './auth.controller.js'

const routes = express.Router()

routes.get('/auth', authresponse)

export default routes