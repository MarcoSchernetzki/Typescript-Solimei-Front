import { createReducer } from '@reduxjs/toolkit';
import { UserI } from './../model/user';
import * as ac from './action.creators';

const userToken = localStorage.getItem('token');
const userData = JSON.parse(localStorage.getItem('UserData') as string);

const initialState: {
    user: UserI | null;
    token: string | null;
    isLogged: boolean;
} = { isLogged: !!userData, token: '' || userToken, user: null || userData };

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogged: !!action.payload.token,
    }));

    builder.addCase(ac.logoutActionCreator, (state, _action) => ({
        ...state,
        user: null,
        token: null,
        isLogged: false,
    }));

    builder.addCase(ac.getActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));

    builder.addDefaultCase((state) => state);
});
