import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, saveNote } from '../../redux/actions'
import { noteToEdit } from '../../redux/selectors';
import '../noteItem/index.css';

const NoteItem = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [idToEdit, setIdToEdit] = useState(null);
    const dispatch = useDispatch();
    const noteToEditValues = useSelector(noteToEdit);

    useEffect(() => {
        console.log(noteToEditValues, 'ediiit')
        setTitle(noteToEditValues.title);
        setContent(noteToEditValues.content);
        setIdToEdit(noteToEditValues.id);
    }, [noteToEditValues]);

    const updateTitle = (event) => {
        setTitle(event.target.value);
    };

    const updateContent = (event) => {
        setContent(event.target.value);
    };

    const createNote = () => {     
        if (title=='' && content=='') {
            alert('Должно быть заполнено хотя бы одно поле')
        } else {
            let newNote = {
                title: title,
                content: content,
            }
            dispatch(addNote(newNote));
            setTitle("");
            setContent("");
        }
    }

    const saveThisNote = () => {
        if (title=='' && content=='') {
            alert('Должно быть заполнено хотя бы одно поле')
        } else {
            let editedNote = {
                title: title,
                content: content,
                id: idToEdit,
            }
        dispatch(saveNote(editedNote));
        setTitle("");
        setContent("");
        setIdToEdit(null);    
      };
    }

        return (
            <div className='main'>
                <div className='note' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input value={title} type='text' placeholder='Title' onChange={updateTitle}/>
                    <textarea value={content} placeholder='Write your note' onChange={updateContent}/>
                </div>
                <div className='btns' style={{display: 'flex', justifyContent: 'center'}}>
                    <button style={{backgroundColor: idToEdit? '#757575' : '#6534ac'}} disabled={idToEdit} onClick={createNote}>ADD</button>
                    <button style={{backgroundColor: idToEdit? '#6534ac' : '#757575'}} disabled={!idToEdit} onClick={saveThisNote}>SAVE</button>
                </div>
            </div>
        )
}

export default NoteItem;