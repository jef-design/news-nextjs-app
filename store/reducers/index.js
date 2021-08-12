import {combineReducers} from 'redux';
import articleReducer from './articleReducer'
import searchReducer from './searchReducer'

const allreducers = combineReducers({
    fetchnews : articleReducer,
    search: searchReducer,

})

export default allreducers;