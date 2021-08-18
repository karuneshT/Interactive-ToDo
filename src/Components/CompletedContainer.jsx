import React from "react";
import CompletedContent from "./CompletedContent";

export default function CompletedTask() {
  return (
    <div className="card container m-3">
      <div className="card-header row">
        <b>Completed</b>
      </div>
      <CompletedContent />
      <CompletedContent />
    </div>
  );
}
