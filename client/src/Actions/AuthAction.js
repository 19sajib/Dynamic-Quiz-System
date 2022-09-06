import * as AuthAPI from '../Api/AuthRequest.js'

export const signIn = (formData) => async (dispatch) => {
    dispatch({type: 'AUTH_START'})

    try {
        const { data } = await AuthAPI.signIn(formData)
        dispatch({ type: 'AUTH_SUCCESS', data: data})
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_ERROR' })
    }
}

export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START'})

    try {
        const { data } = await AuthAPI.signUp(formData)
        dispatch({ type: 'AUTH_SUCCESS', data:data })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_ERROR' })
    }
}

export const logOut = () => async (dispatch) => {
    dispatch({ type: 'LOG_OUT'})
}
