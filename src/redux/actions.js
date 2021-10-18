import { types } from "./actionTypes";

export const addNote = (payload) => ({
    type: types.ADD_NOTE,
    payload,
});

export const deleteNote = (payload) => ({
    type: types.DELETE_NOTE,
    payload,
});

export const editNote = (payload) => ({
    type: types.EDIT_NOTE,
    payload,
});

export const saveNote = (payload) => ({
    type: types.SAVE_NOTE,
    payload,
});