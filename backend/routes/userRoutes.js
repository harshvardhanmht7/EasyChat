import express from "express";
import {addUser,getUsers, loign} from '../controllers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router=express.Router()

 router.route('/adduser').post(addUser)
 
 router.route('/').get(authMiddleware ,getUsers)

 router.route('/login').post(loign)

export default router
