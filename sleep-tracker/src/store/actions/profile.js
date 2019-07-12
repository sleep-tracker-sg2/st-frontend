
/*import axios from "axios";

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
};  */

// add imports axios etc
import axios from 'axios'

//link to heroku deployment
const link = 'https://sleep-track1.herokuapp.com/sleep-stats'

//grab data 
export const FETCH_STATS_START = 'FETCH_STATS_START'
export const FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE'
export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS'

export const getStats = id => dispatch => {
    dispatch({ type: FETCH_STATS_START })
    axios.get(`${link}/${id}`)
        .then(res => {
            dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATS_FAILURE, payload: err.response.data.message})
        })
}

export const getStatsDate = (id, date) => dispatch => {
    dispatch({ type: FETCH_STATS_START })
    axios.get(`${link}/${id}/date/${date}`)
        .then(res => {
            dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATS_FAILURE, payload: err.response.data.message})
        })
}

export const getStatsMonth = (id, month) => dispatch => {
    dispatch({ type: FETCH_STATS_START })
    axios.get(`${link}/${id}/month/${month}`)
        .then(res => {
            dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATS_FAILURE, payload: err.response.data.message})
        })
}

export const getStatsYear = (id, year) => dispatch => {
    dispatch({ type: FETCH_STATS_START })
    axios.get(`${link}/${id}/year/${year}`)
        .then(res => {
            dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATS_FAILURE, payload: err.response.data.message})
        })
}

export const getStatsLimitOrder = (id, limit, order) => dispatch => {
    dispatch({ type: FETCH_STATS_START })
    axios.get(`${link}/${id}/limit/${limit}/order/${order}`)
        .then(res => {
            dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATS_FAILURE, payload: err.response.data.message})
        })
}

export const getStatsAnnual = (id, year) => dispatch => {
    dispatch({ type: FETCH_STATS_START })
    axios.get(`${link}/${id}/annual/${year}`)
        .then(res => {
            dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATS_FAILURE, payload: err.response.data.message})
        })
}

export const UPDATE_STATS_START = 'UPDATE_STATS_START'
export const UPDATE_STATS_SUCCESS = 'UPDATE_STATS_SUCCESS'
export const UPDATE_STATS_FAIL = 'UPDATE_STATS_FAIL'

export const updateStat = stat => dispatch => {
    dispatch({ type: UPDATE_STATS_START })
    axios.put(`${link}`, stat)
        .then(res => {
            dispatch({ type: UPDATE_STATS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: UPDATE_STATS_FAIL, payload: err.response.data.message})
        })
}

export const DELETE_STAT_START = 'DELETE_STAT_START'
export const DELETE_STAT_FAIL = 'DELETE_STAT_FAIL'
export const DELETE_STAT_SUCCESS = 'DELETE_STAT_SUCCESS'

export const deleteStat = (id, removeId) => dispatch => {
    dispatch({ type: DELETE_STAT_START })
    axios.delete(`${link}/${id}/remove/${removeId}`)
        .then(res => {
            dispatch({ type: DELETE_STAT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: DELETE_STAT_FAIL, payload: err.response.data.message})
        })
}