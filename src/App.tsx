import { useState } from 'react' 
import './App.css'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import { Note } from './types' 
function App() {
  
  const [notes, setNotes] = useState<Note[]>([])

  
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(), 
      text: text
    }
    
    setNotes([...notes, newNote])
    console.log("Added:", newNote) 
  }

  return (
    <div className="App">
      <h1>Sticky Notes</h1>
    
      <NoteForm onAdd={addNote} />
      <hr />
      <NoteList />
    </div>
  )
}

export default App