import React from "react";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completednotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completednotes;
  if (!allNotes) return <h2>No Notes Has Already Been Added</h2>;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed<span>{completednotes}</span>
      </li>
      <li>
        Open<span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
