
import { combineReducers } from "redux";
import  userNameReducer  from '../RootReducers/reducer1'
import  emailReducer  from '../RootReducers/reducer2'
import  userInfoReducer  from '../RootReducers/reducer3'


const rootReducer = combineReducers({
    userNameReducer,
    emailReducer,
    userInfoReducer,
   
});
export default rootReducer