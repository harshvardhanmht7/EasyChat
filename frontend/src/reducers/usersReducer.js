import {USERS_LIST_REQUEST,USERS_LIST_SUCCESS,USERS_LIST_FAIL,CONTACTS_LIST_FAIL,CONTACTS_LIST_REQUEST,CONTACTS_LIST_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from '../constants/usersContants'


// user login 

export const loginReducer=(state={},action)=>{

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                loading :false,
                userInfo:action.payload
            }
        
            case LOGIN_FAIL:
                return{
                    loading :false,
                    error:action.payload
                }    
            
                case LOGOUT_SUCCESS:
                    return{}
    
        default:
          return state
    }
}








// user register 

export const userRegisterReducer=(state={},action)=>{

    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                loading:true
            }
        case REGISTER_SUCCESS:
            return{
                loading :false,
                registerInfo:action.payload
            }
        
            case REGISTER_FAIL:
                return{
                    loading :false,
                    error:action.payload
                }    
            
    
        default:
          return state
    }
}








// get all contact reducer

export const contactsListReducer=(state={},action)=>{

    switch (action.type) {
        case CONTACTS_LIST_REQUEST:
            return {
                loading:true
            }
        case CONTACTS_LIST_SUCCESS:
            return{
                loading :false,
                contacts:action.payload
            }
        
            case CONTACTS_LIST_SUCCESS:
                return{
                    loading :false,
                    error:action.payload
                }    
    
        default:
          return state
    }
}


