import React from 'react';

import notes from '../notes';

const createNote = note => {
  return (
    <div className="note" key={note.id}>
      <h1 className="note__title">{note.title}</h1>
      <p className="note__content">{note.content}</p>
    </div>
  )
}

const Note = () => {
  return notes.map(createNote)
};

export default Note;