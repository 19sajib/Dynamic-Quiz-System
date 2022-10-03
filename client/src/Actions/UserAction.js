import * as UserAPI from '../Api/UserRequest.js'

export const getUser = (id) => async (dispatch) => {
    dispatch({type: 'USER_START'})

    try {
        const { data } = await UserAPI.getUser(id)
        dispatch({ type: 'USER_SUCCESS', data: data})
    } catch (error) {
        console.log(error)
        dispatch({ type: 'USER_ERROR' })
    }
}
