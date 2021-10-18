import types from './actionTypes';

export const addNote = (payload) = {
    type: types.ADD_NOTE_SAGA,
    payload,
}

export const saveNote = (payload) = {
    type: types.SAVE_NOTE_SAGA,
    payload,
}