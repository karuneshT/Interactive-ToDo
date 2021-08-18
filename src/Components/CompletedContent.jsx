import React from "react";

export default function CompletedContent() {
  return (
    <div className="card-body completed row">
      <div className="col-1 ">
        <i className="fas fa-ellipsis-v"></i>
        <i className="fas fa-ellipsis-v">
          <input className="m-2" type="radio" />
        </i>
      </div>
      <div className="col-9 p-1 ml-1">
        <h6>Note Title</h6>
      </div>
    </div>
  );
}
