import {CONTACT_MESSAGE_REQUEST,CONTACT_MESSAGE_FAIL,CONTACT_MESSAGE_SUCCESS} from '../constants/messageContants'

export const contactMessageReducer=(state={},action)=>{
    switch (action.type) {
        case CONTACT_MESSAGE_REQUEST:
            return{
                loading:true,
            }
        case CONTACT_MESSAGE_SUCCESS:
            return{
                loading:false,
                messageInfo:action.payload.data
            }

        case CONTACT_MESSAGE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return state
    }

}

