import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { UserI } from '../model/user';

export const loginActionCreator = createAction<{ user: UserI; token: string }>(
    actionTypes.login
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const getActionCreator = createAction<UserI>(actionTypes.get);
