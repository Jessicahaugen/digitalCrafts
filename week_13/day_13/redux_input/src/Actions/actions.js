export const addUsername = (dispatch,inputValue) => {
    return dispatch({ type: "USERNAME", payload:inputValue});
};
export const addEmail = (dispatch,inputValue) => {
    return dispatch({ type: "EMAIL", payload: inputValue});
};
export const storeUserDetails = (dispatch, username, email) => {
    return dispatch({ type: "USERDETAILS", payload: {username, email}});
};
