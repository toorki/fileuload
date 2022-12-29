import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { addNewFileReducer } from './FileReducers';

const reducer = combineReducers({
    addNewFile : addNewFileReducer,
})
const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null

const initState={loginDetales:{user:fromLocalStorage}}


const store = createStore (reducer, initState, composeWithDevTools())

export default store