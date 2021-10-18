import types from './actionTypes';

export const setNotes = (payload) = {
    type: types.SET_NOTES_SAGA,
    payload,
}

export const deleteNote = (payload) = {
    type: types.DELETE_NOTE_SAGA,
    payload,
}