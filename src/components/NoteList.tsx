import React from 'react';
import {type Note } from '../types';
 
interface NoteListProps {
  notes: Note[];
}
 
const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div>
      <h3>Notes</h3>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default NoteList;