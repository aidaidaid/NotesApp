import React from 'react';
import NoteList from './components/NoteList';
import NoteItem from './components/noteItem'
import '../src/App.css';

function App() {
 
    return(
      <div className='app'>
        <NoteItem />
        <NoteList />
      </div>
    )
}

export default App;
