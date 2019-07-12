// export default combineReducers { }
// import { combineReducers } from 'redux'
// import profile from './profile'
// import authorizations from './authorizations'

// export default combineReducers({
//     profile,
//     authorizations
// })

// imports {}
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/authorizations'

import {
    FETCH_STATS_START,
    FETCH_STATS_FAILURE,
    FETCH_STATS_SUCCESS,
    UPDATE_STATS_START,
    UPDATE_STATS_SUCCESS,
    UPDATE_STATS_FAIL,
    DELETE_STAT_START,
    DELETE_STAT_FAIL,
    DELETE_STAT_SUCCESS
} from "../actions/profile";

//init state
const initialState = {
    authMessage: '',
    token: '',
    loggedIn: false,
    loggingIn: false,
    signingUp: false,
    authStatus: '',
    stats: [],
    fetchingStat: false,
    addingStat: false,
    updatingStat: false,
    deletingStat: false,
    error: '',
    user: {
        username: '',
        id: ''
    }
}

//export default function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                authMessage: '',
                authStatus: action.type,
                signingUp: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authStatus: action.type,
                signingUp: false,
                authMessage: `${action.payload.first_name}, you successfully register`
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                signingUp: false,
                authMessage: action.payload,
                authStatus: action.type
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
                loggedIn: true,
                authMessage: action.payload,
                token: localStorage.getItem('token'),
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                authMessage: action.payload
            }
        case FETCH_STATS_START:
            return {
                ...state,
                fetchingStat: true
            }
        case FETCH_STATS_SUCCESS:
            return {
                ...state,
                fetchingStat: false,
                stats: action.payload
            }
        case FETCH_STATS_FAILURE:
            return {
                ...state,
                fetchingStat: false,
                error: action.payload
            }
        case UPDATE_STATS_START:
            return {
                ...state,
                updatingStat: true
            }
        case UPDATE_STATS_SUCCESS:
            return {
                ...state,
                updatingStat: false,
                stats: action.payload
            }
        case UPDATE_STATS_FAIL:
            return {
                ...state,
                updatingStat: false,
                error: action.payload
            }
        case DELETE_STAT_START:
            return {
                ...state,
                deletingStat: true
            }
        case DELETE_STAT_SUCCESS:
            return {
                ...state,
                deletingStat: false,
                stats: action.payload
            }
        case DELETE_STAT_FAIL:
            return {
                ...state,
                deletingStat: false,
                error: action.payload
            }
        default:
            return state
    }
}

// export default authorizations