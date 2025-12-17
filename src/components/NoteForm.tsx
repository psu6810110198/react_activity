
import React, { useState } from 'react';
 
interface NoteFormProps {
  onAdd: (text: string) => void;
}
 
const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter new note text"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};
 
export default NoteForm;
 
