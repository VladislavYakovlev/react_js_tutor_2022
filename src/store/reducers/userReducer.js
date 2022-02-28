const initState = {
    user: [],
    loggined: false
}

export const userReducer = (state=initState,action) => {
    if(action?.type == 'user_loggined'){
        return {user: action.payload,loggined:action.loggined}
    }else {
        return state;
    }
}