import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notesList } from '../../redux/selectors';
import { deleteNote, editNote } from '../../redux/actions'
import './index.css';

const NoteList = () => {
    const noteList = useSelector(notesList);
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    console.log("store", store)

    const deleteThisNote = (id) => {
        dispatch(deleteNote(id));
    }

    const editThisNote = (id) => {
        // let noteToEdit = noteList.filter(note => note.id !== id), 
        dispatch(editNote(id));
    }

        return (
            <div className='sidebar'>
                <h2>NOTES</h2>
                {noteList.map((note)=>(
                <div className='sidebar-note'>
                    <div style={{overflow: 'hidden'}} >
                    <div className='title'>
                        <strong key={note.id}>{note.title}</strong>
                        <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                            <button style={{marginRight: '5px', color: '#3802b8'}} onClick={() => editThisNote(note.id)}>Edit</button>
                            <button style={{color: '#ff1414'}} onClick={() => deleteThisNote(note.id)}>Delete</button>
                        </div>
                    </div>
                    <p className='content' key={note.id}>{note.content}</p>
                    </div>
                </div>
                ))}
            </div> 
        )
}

export default NoteList;