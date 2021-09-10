import React from "react";
import NoteList from "./components/NoteList";
import NoteItem from './components/noteItem'
import '../src/App.css';
class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        id: 1,
        notes: [],
        titleValue: '',
        contentValue: '',
        noteToEdit: [],
        idToEdit: 0,
        isEdit: false,
      } 
  }

  addNote = (titleValue, contentValue) => {
    this.setState(() => {
      return {
      id: this.state.id+1,
      notes: [...this.state.notes, {title: titleValue, content: contentValue, id: this.state.id}],
    }
    })
  };
 
  saveNote = () => {
    const newNotes = this.state.notes.map((item, index)=>{
        if (item.id===this.state.idToEdit){
          return {
            ...item,
            title: this.state.titleValue,
            content: this.state.contentValue
          }
        }
        return item;
    });
    this.setState({
      notes: newNotes,
      idToEdit: 0,
      titleValue: '',
      contentValue: '',
      isEdit: false,
    })
  }

  deleteNote = (idToDelete) => {
    this.setState({notes: this.state.notes.filter((note)=>note.id!==idToDelete)})
  }

  editNote = (idToEdit) => {
    const noteToEd =  this.state.notes.find((note)=>note.id===idToEdit)
    this.setState({noteToEdit: [noteToEd]});
    this.setState({idToEdit: idToEdit});
    this.setState(prevState => ({
      ...prevState,
      titleValue: noteToEd?.title,
      contentValue: noteToEd?.content,
    }))
    this.setState({isEdit: true})
  }

  onChangeTitle = (text) => {
    this.setState({titleValue: text});
  }

  onChangeContent = (text) => {
    this.setState({contentValue: text});
  }

  createNote = () => {
    this.addNote(this.state.titleValue, this.state.contentValue);
    this.setState({titleValue: ''});
    this.setState({contentValue: ''});
   }

  render(){  
    return(
      <div className='app'>
        <NoteItem
          createNote={this.createNote}
          onChangeTitle={this.onChangeTitle}
          onChangeContent={this.onChangeContent}
          titleValue={this.state.titleValue}
          contentValue={this.state.contentValue}
          isEdit={this.state.isEdit}
          addNote={this.addNote}
          saveNote={this.saveNote}
          noteToEdit={this.state.noteToEdit}
        />
        <NoteList notes={this.state.notes} editNote={this.editNote} deleteNote={this.deleteNote}/>
      </div>
    )
  }
}

export default App;
