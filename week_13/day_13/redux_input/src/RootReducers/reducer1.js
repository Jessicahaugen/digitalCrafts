import {USERNAME} from '../ActionTypes/actionTypes'

const initialState = {
    username: "",    
};

function userNameReducer(state = initialState, action) {
    switch (action.type) {
      case USERNAME:
        return (state = action.payload);
    
      default:
        return state;
    }
  }
export default userNameReducer