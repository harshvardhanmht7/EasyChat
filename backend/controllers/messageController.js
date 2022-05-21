import messages from '../data/messages.js'
import messageModel  from '../models/messageModel.js'
import asyncHandler from 'express-async-handler'


 export const addMessage=asyncHandler(async(req,res)=>{

    const {description,to}=req.body
    

    const from =req.user.email
    

    if(description,from,to){

        const message= await messageModel.create({
            description,
            from,
            to
        })
       
        res.json(message)
    }

    else{
        throw new Error('all fields are mandatory !')
    }


 })



// all contact message

export const contactmessage=asyncHandler(async(req,res)=>{

    const senderEmail=req.user.email;
    const recieverEmail=req.params.email


    try {
        
        const messages=await messageModel.find({$or: [{ from: senderEmail,to:recieverEmail }, { from:recieverEmail,to: senderEmail }]}).sort({"_id":-1})
        
        res.send(messages)
      

    } catch (error) {

        throw new Error('Error in loading messages !')
        
    }

})