import {EMAIL} from '../ActionTypes/actionTypes'

const initialState = {
    email: "",
    
};

function emailReducer(state = initialState, action) {
    switch (action.type) {
      case EMAIL:
        return (state = action.payload);
    
      default:
        return state;
    }
}

export default emailReducer;