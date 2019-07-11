// import { GET, POST, DELETE}
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

//init state here
const initialState = [{
    stats: [],
    fetchingStat: false,
    addingStat: false,
    updatingStat: false,
    deletingStat: false,
    error: ''
}]

//export default function

export default function profile (state = initialState, action){
    switch (action.type) {
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


// export default profile