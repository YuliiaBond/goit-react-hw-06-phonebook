import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import {addContact, deleteContact, filterContact} from './actions';

const item = createReducer([], {
    [addContact.type]: (state, { payload }) => {
        const search = state.find(el => el.name.toLowerCase() === payload.name.toLowerCase(),
        );
        
        if (search) {
            alert(`${search.name} is already in contacts.`);
            return;
        }
        return [...state, payload]
    },
    
    [deleteContact.type]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [filterContact.type]: (_, { payload }) => payload,
});

export default combineReducers({
    item,
    filter,
});

