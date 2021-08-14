import { ActionTypes } from "../constants/types";

const defaultState = {
    topheadline: [],
    world: [],
    nation: [],
    business: [],
    entertainment: [],
    health: [],
    sports: [],
    science: [],
    technology: []

    // loading: false,
};

const articleReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_TOP_HEADLINES:
            return { ...state, 
                topheadline: payload };
        case ActionTypes.FETCH_WORLD:
            return{...state,
                 world: payload
             };
        case ActionTypes.FETCH_NATION:
                return{...state,
                     nation: payload
                 };
        case ActionTypes.FETCH_BUSINESS:
            return{...state,
                 business: payload
             };
        case ActionTypes.FETCH_ENTERTAINMENT:
            return{...state,
                 entertainment: payload
             };
        case ActionTypes.FETCH_HEALTH:
            return{...state,
                 health: payload
             };
        case ActionTypes.FETCH_SPORTS:
            return{...state,
                 sports: payload
             };
        case ActionTypes.FETCH_SCIENCE:
            return{...state,
                 science: payload
             };
        case ActionTypes.FETCH_TECHNOLOGY:
            return{...state,
                 technology: payload
             };
             
        default:
            return state;
    }
};
export default articleReducer;