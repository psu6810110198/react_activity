import { useState } from 'react' // 1. Import useState
import './App.css'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import { Note } from './types' // 2. Import Interface Note

function App() {
  // 3. ประกาศ State เก็บรายการ Note เป็น Array (<Note[]>)
  const [notes, setNotes] = useState<Note[]>([])

  // 4. สร้างฟังก์ชัน addNote รับ text เข้ามาสร้างเป็น Object Note ใหม่
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(), // ใช้เวลาปัจจุบันเป็น ID ชั่วคราว
      text: text
    }
    // อัปเดต State โดยเอา Note เดิม + Note ใหม่
    setNotes([...notes, newNote])
    console.log("Added:", newNote) // (Optional) เช็คดูใน Console ว่าเข้าไหม
  }

  return (
    <div className="App">
      <h1>Sticky Notes</h1>
      {/* ส่งฟังก์ชัน addNote ไปให้ NoteForm ใช้งานผ่าน Props ชื่อ onAdd */}
      <NoteForm onAdd={addNote} />
      <hr />
      <NoteList />
    </div>
  )
}

export default App