const initialState={
    name:"jess"

}

function rootReducer(state=initialState, action){
    switch(action.type) {
        case "CHANGE": 
            return {name: "joe" }
       
        default:
            return state;
    }

}


export default rootReducer
