import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
import { House } from '../model/house';

export const loadActionCreator = createAction<House[]>(actionTypes.load);
export const addActionCreator = createAction<House>(actionTypes.add);
export const updateActionCreator = createAction<House>(actionTypes.update);
export const deleteActionCreator = createAction<House['id']>(
    actionTypes.delete
);
export const selectActionCreator = createAction<House>(actionTypes.select);
export const comeTrueActionCreator = createAction<boolean>(
    actionTypes.comeTrue
);
