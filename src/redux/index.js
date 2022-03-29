const INITIAL_STATE = {
    name: "",
    isDark: false,
    pokemonsPerPage: null

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
        case "SET_POKEMONS_PER_PAGE":
            return{
                ...state,
                pokemonsPerPage: action.payload
            }

        default:
           return state;
    }

}

export default reducer;