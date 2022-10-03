const userReducer = (
    state = { userData: null, loading: false, error: false, updateLoading: false },
    action
) => {
    switch (action.type) {
        case 'USER_START':
            return {...state, loading: true, error: false }
        
        case 'USER_SUCCESS':
            return { ...state, userData: action.data, loading: false, error: false }
        
        case 'USER_ERROR':
            return { ...state, loading: false, error: true }

        default:
            return state
    }

}

export default userReducer;