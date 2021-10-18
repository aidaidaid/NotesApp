import { types } from "./actionTypes";

// export const setNotesList = (payload) => ({
//     type: types.SET_NOTES_LIST,
//     payload,
// });

// export const setNoteData = (payload) => ({
//     type: types.SET_NOTE_DATA,
//     payload,
// });

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