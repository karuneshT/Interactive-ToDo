import React from "react";

export default function NoteContent() {
  return (
    <div>
      <div className="card-body row">
        <div className="col-1 ">
          <i className="fas fa-ellipsis-v"></i>
          <i className="fas fa-ellipsis-v"></i>
          <input
            className="m-2 btn-group-toggle"
            data-toggle="buttons"
            type="radio"
          />
        </div>
        <div className="col-9 p-1 ml-1">
          <h6>Note Title</h6>
          <p className="card-text" style={{ color: "grey", fontSize: "12px" }}>
            Write something here about the note.
            <span style={{ fontSize: "12px", color: "blue" }}>
              <i>Read More...</i>
            </span>
          </p>
        </div>
        <div className="col-1 p-3  btn-group">
          <button type="button" className="btn btn-secondary">
            {" "}
            Edit{" "}
          </button>
          <button
            type="button"
            className="btn btn-secondary p-1 dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <span className="sr-only "></span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              {" "}
              Delete{" "}
            </a>
            <a className="dropdown-item" href="#">
              {" "}
              Duplicate{" "}
            </a>
            <a className="dropdown-item" href="#">
              {" "}
              Add Reminder{" "}
            </a>
            <a className="dropdown-item" href="#">
              {" "}
              Add Comment{" "}
            </a>
          </div>
        </div>
        <hr style={{ width: "92%", marginLeft: "12px" }} />
      </div>
    </div>
  );
}
