import { types } from "./actionTypes";

const initialState = {
    id: 1,
    notes: [],
    // newNotes: [],
    noteToEdit: {},
    // idToEdit: 0,
    // isEdit: false,
};

function noteReducer (state = initialState, action) {
    switch(action.type) {
        case types.ADD_NOTE:
            action.payload.id = state.id;
            return {
                ...state,
                notes: [...state.notes, action.payload],
                id: state.id + 1,           
            }
        case types.DELETE_NOTE:
            return {
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.payload),    
            }
        case types.EDIT_NOTE:
            return {
                ...state,
                noteToEdit: [...state.notes].find(note => note.id === action.payload),  
            }
        case types.SAVE_NOTE:
            debugger
            return {
                ...state,
                notes: [...state.notes].map(note => {
                    if (note.id === action.payload.id){
                        return {
                            ...note,
                            ...action.payload,
                        }
                    }
                    return note;
                })               
            }
        default:
            return state;
    };
};

export default noteReducer;