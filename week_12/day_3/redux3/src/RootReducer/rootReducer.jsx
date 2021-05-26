const initialState={
    blankArray:[]

}

function rootReducer(state=initialState, action){
    switch(action.type) {
        case "CHANGE": 
            return {blankArray: [...state.blankArray, {name: "Joe"}, {name: "Mikael"}] };
       
        default:
            return state;
    }

}
export default rootReducer