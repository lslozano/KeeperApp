import React from "react";

const Notes = ({ notes, setNotes }) => {
  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note, index) => index !== id);
    setNotes(filteredNotes);
  };

  const note = (note, index) => {
    return (
      <div className="note" key={index}>
        <h1 className="note__title">{note.title}</h1>
        <p className="note__content">{note.content}</p>
        <button className="note__button" onClick={() => handleDelete(index)}>
          DELETE
        </button>
      </div>
    );
  };

  if (notes.length === 0) {
    return <h1 className="notes__none">No notes added.</h1>;
  } else {
    return notes.map(note);
  }
};

export default Notes;
