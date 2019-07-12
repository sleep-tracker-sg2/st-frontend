


/*import axios from "axios";
import { GET_ERRORS, SET_USER } from "./storeActions";
import authToken from "../../views/authToken";
import jwt_decode from "jwt-decode";
import { handleRedux } from "../../views/handleRedux";

const link = "https://sleep-tracker-app.herokuapp.com/";

//imports like axios jwt_decode here
import axios from 'axios'
// import jwt from 'jwt-decode'

// link to heroku backend deployment here
const link = 'https://sleep-track1.herokuapp.com'


export const registerUser = (userData, redirect) => dispatch => {
  axios
    .post(`${link}/register`, userData)
    .then(res => redirect.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Logon - Get User Token
export const login = (userData, redirect) => dispatch => {
  axios
    .post(`${link}/login`, userData)
    .then(res => {
      console.log(res.data);
      // Save to local storage
      const { token } = res.data;
      // Set token to local storage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      authToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setUser(decoded));

      redirect.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

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

// Set user
export const setUser = decoded => {
  return {
    type: SET_USER,
    payload: decoded
  };
};


// Log user out
export const userLogout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  authToken(false);
  dispatch(setUser({}));
  window.location.href = "/";
}; */

//set user - login


//logout
// export const LOGOUT_START = 'LOGOUT_START';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// export const logout = () => dispatch => {
//     axios.get
// }

