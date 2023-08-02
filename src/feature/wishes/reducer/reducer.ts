import { createReducer } from '@reduxjs/toolkit';
import * as ac from './action.creator';
import { House } from '../model/house';

const initialState: {
    wishes: Array<House>;
    selectedWish: House | null;
} = {
    wishes: [],
    selectedWish: null,
};

export const wishReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (state, action) => ({
        ...state,
        wishes: action.payload,
    }));

    builder.addCase(ac.addActionCreator, (state, action) => ({
        ...state,
        wishes: [...state.wishes, action.payload],
    }));

    builder.addCase(ac.updateActionCreator, (state, action) => ({
        ...state,
        wishes: state.wishes.map((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));

    builder.addCase(ac.deleteActionCreator, (state, action) => ({
        ...state,
        wishes: state.wishes.filter((item) => item.id !== action.payload),
    }));

    builder.addCase(ac.selectActionCreator, (state, action) => ({
        ...state,
        selectedWish: action.payload,
    }));

    builder.addCase(ac.comeTrueActionCreator, (state, action) => ({
        ...state,
        selectedWish: {
            ...(state.selectedWish as House),
            comeTrue: action.payload,
        },
    }));

    builder.addDefaultCase((state) => state);
});
