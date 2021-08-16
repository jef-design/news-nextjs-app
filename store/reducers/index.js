import {combineReducers} from 'redux';
import articleReducer from './articleReducer'
import searchReducer from './searchReducer'
import miscReducer from './miscReducer'

const allreducers = combineReducers({
    fetchnews : articleReducer,
    search: searchReducer,
    miscloading: miscReducer

})

export default allreducers;