import messages from '../data/messages.js'
import messageModel  from '../models/messageModel.js'
import asyncHandler from 'express-async-handler'
import userModel from '../models/userModel.js'


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
        
        const messagesWithNames=[]


        for (const message of messages) {
            const userEmail= await userModel.find({email:message.from})
            const obj={
                name:userEmail[0].name,
                from:message.from,
                to:message.to,
                description:message.description,
                _id:message._id,
                createdAt:message.createdAt
            
            }
            messagesWithNames.push(obj)
          }



        res.send({data:messagesWithNames})
      

    } catch (error) {

        throw new Error('Error in loading messages !')
        
    }

})