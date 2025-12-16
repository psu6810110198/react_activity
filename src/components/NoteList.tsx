import React from 'react'
import { Note } from './types' 

interface NoteListProps {
  notes: Note[];
}


const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>My Notes</h3>
      
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '5px', borderRadius: '5px' }}>
          {note.text}
        </div>
      ))}
    </div>
  )
}

export default NoteList