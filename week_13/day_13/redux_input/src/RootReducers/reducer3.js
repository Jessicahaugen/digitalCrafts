import {USERDETAILS} from '../ActionTypes/actionTypes'

const initialState = "";
    


function userInfoReducer(state = initialState, action) {
    switch (action.type) {
      case USERDETAILS:
        return (state = action.payload);
    
      default:
        return state;
    }
  }
export default userInfoReducer