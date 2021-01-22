import React, { useState } from "react";

import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = ({ setNotes }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleExpand = () => {
    setIsExpanded(true);
  }

  const submitNote = (event) => {
    setNotes((prevState) => [...prevState, note]);
    setNote({
      title: "",
      content: "",
    });
    setIsExpanded(false);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
        {isExpanded && (
          <input
            className="note__input"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          className="note__textarea"
          name="content"
          onChange={handleChange}
          onClick={handleExpand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab className="create__button" type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
