import { LOGIN, LOGOUT, SIGNUP } from "../actionTypes";

const initialState = []

export default function (user = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            const { value } = action.payload
            return [value]
        }
        case LOGOUT: {
            return []
        }
        case SIGNUP: {
            const { value } = action.payload
            return [value]
        }
        default:
            return user
    }
}