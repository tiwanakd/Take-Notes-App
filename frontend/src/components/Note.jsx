import React from 'react'
import "../styles/Note.css"


const Note = ({note, onDelete}) => {

    const formartedDate = new Date(note.created_at).toLocaleDateString("en-CA");

  return (
    <div className='note-container'>
        <p className='note-title'>{note.title}</p>
        <p className='note-content'>{note.content}</p>
        <p className='note-date'>{formartedDate}</p>
        <button className='delete-button' onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  )
}

export default Note