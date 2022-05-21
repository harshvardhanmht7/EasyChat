import {CONTACTS_LIST_FAIL, CONTACTS_LIST_REQUEST, CONTACTS_LIST_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, USERS_LIST_FAIL,USERS_LIST_REQUEST,USERS_LIST_SUCCESS} from '../constants/usersContants'
import axois from 'axios'
import {getState} from 'react-redux'

// loign 


export const loginUser=(email,password)=>async(dispatch)=>{


    dispatch({type:LOGIN_REQUEST})

    const config={
        headers:{
            'Content-Type':'application/json'
        }
        
    }

    try {

        const {data}=await axois.post('http://localhost:5000/api/users/login',{
            email:email,
            password:password
        },config)
        
     
    dispatch({
        type:LOGIN_SUCCESS,
        payload:data
    })
        
    } catch (error) {
        
        
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }

}



// logout


export const logoutUser=()=>async(dispatch)=>{

    
dispatch({type:LOGOUT_SUCCESS})



}


// post register request 



export const registerUser=(name,email,password,confirmPassword)=>async(dispatch)=>{

    
    dispatch({type:REGISTER_REQUEST})

 const config={
    headers:{
        'Content-Type':'application/json'
    }}

    try {
        const {data}=await axois.post('http://localhost:5000/api/users/adduser',{
            name,
            email,
            password,
            confirmPassword
        },config)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })

    } catch (error) {
 
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
   
    }

    
    }





// get all contacts
export const getContactsList=()=>async(dispatch,getState)=>{

      

    dispatch({type:CONTACTS_LIST_REQUEST})

      const {login:{userInfo}} =getState()
    const config={
        headers:{
            'Authorization':`${userInfo.token}`
        }
        
    }



    try {

        const {data}=await axois.get('http://localhost:5000/api/users',config)

        
     
    dispatch({
        type:CONTACTS_LIST_SUCCESS,
        payload:data
    })
        
    } catch (error) {
        
        dispatch({
            type:CONTACTS_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }

}