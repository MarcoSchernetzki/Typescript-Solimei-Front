import { createReducer } from '@reduxjs/toolkit';
import * as ac from './action.creator';
import { House } from '../model/house';

const initialState: {
    houses: Array<House>;
    selectedHouse: House | null;
} = {
    houses: [],
    selectedHouse: null,
};

export const wishReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (state, action) => ({
        ...state,
        houses: action.payload,
    }));

    builder.addCase(ac.addActionCreator, (state, action) => ({
        ...state,
        houses: [...state.houses, action.payload],
    }));

    builder.addCase(ac.updateActionCreator, (state, action) => ({
        ...state,
        houses: state.houses.map((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));

    builder.addCase(ac.deleteActionCreator, (state, action) => ({
        ...state,
        houses: state.houses.filter((item) => item.id !== action.payload),
    }));

    builder.addCase(ac.selectActionCreator, (state, action) => ({
        ...state,
        selectedHouse: action.payload,
    }));

    builder.addCase(ac.comeTrueActionCreator, (state, action) => ({
        ...state,
        selectedHouse: {
            ...(state.selectedHouse as House),
            comeTrue: action.payload,
        },
    }));

    builder.addDefaultCase((state) => state);
});
