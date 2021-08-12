import { ActionTypes } from "../constants/types";

const defaultState = {
    query: '',
    searchnews: [],


    // loading: false,
};

const searchReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_QUERY:
            return { ...state, 
                query: payload };
            case ActionTypes.FETCH_SEARCH:
                return { ...state, 
                searchnews: payload };
      
        default:
            return state;
    }
};
export default searchReducer;