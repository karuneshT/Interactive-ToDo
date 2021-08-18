import React from "react";
import NoteContent from "./NoteContent";

export default function NoteContainer() {
  return (
    <div>
      <div className="card container m-3 container">
        <div className="card-header row">
          <b>To Do</b>
        </div>
        <NoteContent />
        <NoteContent />
        <NoteContent />
        <NoteContent />
      </div>
      <br />
    </div>
  );
}
