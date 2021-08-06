import {combineReducers} from 'redux';
import articleReducer from './articleReducer'

const allreducers = combineReducers({
    fetchnews : articleReducer,

})

export default allreducers;