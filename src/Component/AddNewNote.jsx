import React, { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handsubmit = (e) => {
    e.preventDefault();
if(!title || !desc) return null;

    const newNote = {
      title,
      desc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setDesc("");
    setTitle("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handsubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Title..."
        />
        <br />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Description..."
        />
        <br />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
