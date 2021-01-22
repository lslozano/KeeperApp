import React, { useState } from "react";

const CreateNote = ({ setNotes }) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote = event => {
    setNotes(prevState => [...prevState, note])
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
        <input
          className="note__input"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="note__textarea"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="create__button" type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateNote;