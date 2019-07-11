// add imports axios etc
import axios from 'axios'

//link to heroku deployment
const link = 'http://localhost:5500/sleep-stats'


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