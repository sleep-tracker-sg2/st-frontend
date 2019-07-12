// imports {}
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/authorizations'

//init state
const initialState = {
    authMessage: '',
    token: '',
    loggedIn: false,
    loggingIn: false,
    signingUp: false,
    authError: ''
}

//export default function
export default function authorizations (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                signingUp: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signingUp: false,
                authMessage: `${action.payload.first_name}, you successfully register`
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                signingUp: false,
                authMessage: action.payload
            }
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                authMessage: action.payload,
                token: localStorage.getItem('token')
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                authMessage: action.payload
            }
        default:
            return state
    }
}

// export default authorizations