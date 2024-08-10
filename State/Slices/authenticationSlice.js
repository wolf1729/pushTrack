import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userName: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
})

export default authSlice.reducer
export const {  } = authSlice.actions