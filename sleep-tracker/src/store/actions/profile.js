import axios from "axios";

import {
  GET_DAILY,
  GET_WEEKLY,
  GET_MONTHLY,
  GET_YEARLY,
  POST_SLEEP,
  UPDATE_SLEEP,
  DELETE_SLEEP,
  GET_ALL_YEAR,
  GET_ERRORS
} from "./types";
import { handleRedux } from "../../views/handleRedux";

const link = "https://sleep-tracker-app.herokuapp.com/";


export const dailyInfo = id => dispatch => {
  axios
    .get(`${link}/sleep_stats/${id}/limit/1/order/desc`)
    .then(res =>
      dispatch({
        type: GET_DAILY,
        payload: res.data[0] || ""
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const weeklyInfo= id => dispatch => {
  axios
    .get(`${link}/sleep_stats/${id}/limit/7/order/desc`)
    .then(res =>
      dispatch({
        type: GET_WEEKLY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMonthlyINFO = id => dispatch => {
  axios
    .get(`${link}/sleep_stats/${id}/month/6`)
    .then(res =>
      dispatch({
        type: GET_MONTHLY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const yearlyInfo = id => dispatch => {
  axios
    .get(`${link}/sleep_stats/${id}/year/2019`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_YEARLY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const yearStats = id => dispatch => {
  axios
    .get(`${link}/sleep_stats/${id}/year_stats/2019`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_ALL_YEAR,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const postSleepObject = data => dispatch => {
  axios
    .post(`${link}/sleep_stats`,data)
    .then(res =>
      dispatch({
        type: POST_SLEEP,
        payload: res.data
      })
    )
    .catch(
      err => console.log(err)
    );
};

export const deleteSleep = (id, month, day, year) => dispatch => {
  axios
    .delete(
      `${link}/sleep_stats/${id}/date/${month}%2F${day}%2F${year}/year/${year}`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_SLEEP,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updateSleep = data => dispatch => {
  axios
    .put(`${link}/sleep_stats/`, data)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_SLEEP,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

