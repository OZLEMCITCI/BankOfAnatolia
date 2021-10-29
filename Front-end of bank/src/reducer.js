export const initialState = {
    cart: [],
    recipient:[],
    userInfo:null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, userInfo: action.item }
        case "LOGOUT":
            return { ...state, userInfo: action.item }
        default:
            return state;
        
    }
}