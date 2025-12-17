import React from 'react';
import { type Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      <h3>Notes</h3>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '10px',
              background: '#1a1a1a',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #333'
            }}>
              <span>{note.text}</span>
              
              {}
              <button 
                onClick={() => onDelete(note.id)}
                style={{ 
                  marginLeft: '10px', 
                  background: '#ff4d4d', 
                  color: 'white', 
                  border: 'none', 
                  padding: '5px 10px', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;