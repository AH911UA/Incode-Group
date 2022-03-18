import { combineReducers, configureStore } from '@reduxjs/toolkit'
import stock from './stock/stockReducer';

const rootReducer = combineReducers({
    stock
})

export default configureStore({
  reducer: rootReducer,
})