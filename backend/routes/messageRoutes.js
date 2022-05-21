import express from "express";
import {addMessage, contactmessage} from '../controllers/messageController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router=express.Router()


  router.route('/addmessage').post(authMiddleware,addMessage)

  router.route('/contactmessage/:email').get(authMiddleware,contactmessage)



  export default router