import React, { Component } from "react";
import '../noteItem/index.css';

class NoteItem extends Component{

    render() {
        return (
        <div className='main'>
            <div className='note' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input value={this.props.titleValue} type='text' placeholder='Title' onChange={(obj) => this.props.onChangeTitle(obj.target.value)}/>
                <textarea value={this.props.contentValue} placeholder='Write your note' onChange={(e) => this.props.onChangeContent(e.target.value)}/>
            </div>
            <div className='btns' style={{display: 'flex', justifyContent: 'center'}}>
                <button style={{backgroundColor: this.props.isEdit? '#757575' : '#6534ac'}} disabled={this.props.isEdit} onClick={this.props.createNote}>ADD</button>
                <button style={{backgroundColor: this.props.isEdit? '#6534ac' : '#757575'}} disabled={!this.props.isEdit} onClick={this.props.saveNote}>SAVE</button>
            </div>
        </div>
    )
    }

}

export default NoteItem;