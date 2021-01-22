import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

const Notes = ({ notes, setNotes }) => {
  const [deleteVisible, setDeleteVisible] = useState(false);

  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note, index) => index !== id);
    setNotes(filteredNotes);
  };

  const showDelete = () => {
    setDeleteVisible((prevState) => !prevState);
  };

  const note = (note, index) => {
    return (
      <div
        className="note"
        onMouseOver={showDelete}
        onMouseOut={showDelete}
        key={index}
      >
        <h1 className="note__title">{note.title}</h1>
        <p className="note__content">{note.content}</p>
        <button
          className={
            deleteVisible ? "note__deletebutton" : "note__deletebutton-hidden"
          }
          onClick={() => handleDelete(index)}
        >
          <DeleteIcon />
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
