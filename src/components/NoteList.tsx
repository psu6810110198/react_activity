import React from 'react'
import { Note } from './types' // อย่าลืม Import Type

// 1. กำหนด Props ตามโจทย์
interface NoteListProps {
  notes: Note[];
}

// 2. รับค่า notes เข้ามา
const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>My Notes</h3>
      {/* 3. วนลูปแสดงผลข้อมูล */}
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '5px', borderRadius: '5px' }}>
          {note.text}
        </div>
      ))}
    </div>
  )
}

export default NoteList