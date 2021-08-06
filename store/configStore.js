import {createStore,applyMiddleware} from 'redux';
import allreducers from './reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allreducers,
    composeWithDevTools(applyMiddleware(thunk)));

export default store;
