import { ActionTypes } from "../constants/types";

const defaultState = {
    loading: false,


};

const miscReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_IS_LOADING:
            return { ...state, 
                loading: true};
        case ActionTypes.FETCH_IS_SUCCESS:
            return { ...state,
            loading: false};
        default:
            return state;
    }
};
export default miscReducer;