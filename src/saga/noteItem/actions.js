import {types} from './actionTypes';

export const addNoteToBD = (payload) => ({
    type: types.ADD_NOTE_SAGA,
    payload,
})

export const deleteNoteFromDB = (payload) => ({
    type: types.DELETE_NOTE_SAGA,
    payload,
})

export const saveNoteToDB = (payload) => ({
    type: types.SAVE_NOTE_SAGA,
    payload,
})