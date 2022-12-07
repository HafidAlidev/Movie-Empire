import { LOGIN, LOGOUT, SIGNUP } from '../actionTypes'

export const login = (value) => ({
    type: LOGIN,
    payload: {
        value: value
    }
})

export const logout = (value) => ({
    type: LOGOUT,
    payload: {}
})

export const signup_ = (value) => ({
    type: SIGNUP,
    payload: {
        value: value
    }
})