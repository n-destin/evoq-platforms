import { combineReducers } from "@reduxjs/toolkit";
import CountReducer from './count-reducer'
//creating the root for all reducers, from which other 
const rootReducer = combineReducers({
    count:CountReducer,
})

export default rootReducer