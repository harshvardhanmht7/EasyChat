import { createStore ,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";


import {contactsListReducer,loginReducer,userRegisterReducer} from './reducers/usersReducer'



const rootReducer = combineReducers({
        contactsList:contactsListReducer,
        login:loginReducer,
        userRegister : userRegisterReducer
    
    })


const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk)));

export default store