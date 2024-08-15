import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../State/Slices/authenticationSlice'

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer
})

