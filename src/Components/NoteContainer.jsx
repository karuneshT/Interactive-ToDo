import React from "react";
import NoteContent from "./NoteContent";

{
  /* Container of the To Do Lists */
}

export default function NoteContainer() {
  return (
    <div>
      <div className="card container m-3 container">
        <div className="card-header row">
          <b>To Do</b>
        </div>
        {/* NoteContent component which contains To Do item title and description*/}
        <NoteContent />
        <NoteContent />
        <NoteContent />
        <NoteContent />
      </div>
      <br />
    </div>
  );
}
