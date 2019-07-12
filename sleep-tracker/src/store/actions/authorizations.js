//imports like axios jwt_decode here
import axios from 'axios'
// import jwt from 'jwt-decode'

// link to heroku backend deployment here
const link = 'https://sleep-track1.herokuapp.com'

//register user

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const register = newUser => dispatch => {
    dispatch({ type: SIGNUP_START })
    axios.post(`${link}/registration`, newUser)
        .then(res => {
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: SIGNUP_FAIL, payload: err.response.data.message})
        })
}

//login - grab user token here
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START})
    axios.post(`${link}/login`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.message})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message})
        })
}


//set user - login


//logout
// export const LOGOUT_START = 'LOGOUT_START';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// export const logout = () => dispatch => {
//     axios.get
// }