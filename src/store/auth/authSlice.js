import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //checking, not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            var { displayName, email, photoURL, uid } = action.payload;
            state.status = 'authenticated';
            state.uid = uid;
            state.email = email;
            state.displayName = displayName;
            state.photoURL = photoURL;
            state.errorMessage = null;
        },
        logout: (state, action) => {
            //   state.stateProperty = action.payload;
            state.status = 'not-authenticated'; //checking, not-authenticated, authenticated
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = action.payload?.errorMessage;
        },
        checkCredentials: (state) => {
            state.status = 'checking';
        },
    }
});

export const { login, logout, checkCredentials } = authSlice.actions;