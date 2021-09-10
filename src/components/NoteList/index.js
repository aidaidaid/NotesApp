import React, { Component } from "react";
import '../NoteList/index.css';

class NoteList extends Component{
    render() {
    return (
        <div className='sidebar'>
            <h2>NOTES</h2>
            {this.props.notes.map((note)=>(
            <div className='sidebar-note'>
                <div style={{overflow: 'hidden'}} >
                <div className='title'>
                    <strong key={note.id}>{note.title}</strong>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <button style={{marginRight: '5px', color: '#3802b8'}} onClick={()=> this.props.editNote(note.id)}>Edit</button>
                        <button style={{color: '#ff1414'}} onClick={()=> this.props.deleteNote(note.id)}>Delete</button>
                    </div>
                </div>
                <p className='content' key={note.id}>{note.content}</p>
                </div>
            </div>
            ))}
        </div> 
    )
}
}

export default NoteList;