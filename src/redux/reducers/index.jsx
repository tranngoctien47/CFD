import countReducer from './countReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'


let reducers = combineReducers({
    auth: authReducer,
    count: countReducer
})

export default reducers