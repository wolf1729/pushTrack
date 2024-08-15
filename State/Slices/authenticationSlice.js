import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { app } from '../Services/firebaseConfig';
import { getAuth, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const initialState = {
    userId: null,
    userName: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.userId = null;
            state.userName = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.userId = action.payload.userId;
                state.userName = action.payload.userName;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.userId = action.payload.userId;
                state.userName = action.payload.userName;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

// Sign Up
export const signup = createAsyncThunk(
    "auth/signup",
    async ({ email, password, username }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: username
            });
            console.log(userCredential)
            return {
                userId: user.uid,
                userName: user.displayName
            };
        } catch (err) {
            console.error(err)
        }
    }
);

// Login
export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return {
                userId: user.uid,
                userName: user.displayName
            };
        } catch (err) {
            console.error(err);
        }
    }
);

export default authSlice.reducer;
export const { logout } = authSlice.actions;
