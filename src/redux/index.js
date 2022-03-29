const INITIAL_STATE = {
    name: "",
    isDark: false

}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_DARK":
            return{
                ...state,
                isDark: !state.isDark
            }
    
        default:
           return state;
    }

}

export default reducer;