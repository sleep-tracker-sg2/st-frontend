

/*import axios from "axios";
import { GET_ERRORS, SET_USER } from "./storeActions";
import authToken from "../../views/authToken";
import jwt_decode from "jwt-decode";
import { handleRedux } from "../../views/handleRedux";

const link = "https://sleep-tracker-app.herokuapp.com/";

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