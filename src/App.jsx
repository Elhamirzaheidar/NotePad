import React, { useState } from "react";
import "./App.css";
import AddNewNote from "./Component/AddNewNote";
import NoteList from "./Component/NoteList";
import NoteStatus from "./Component/NoteStatus";
import NoteHeader from "./Component/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("earliest");

  const handleNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handelDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handelCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      notes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };
  let sortedNote = notes;
  if (sortBy === "earliest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedNote = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={sortedNote}
            onDelete={handelDeleteNote}
            onComplete={handelCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
