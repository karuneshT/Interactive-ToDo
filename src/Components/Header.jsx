import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container m-1">
        <div className="row ">
          {/* Title */}
          <span className="col-6 d-flex justify-content-start">
            <h1>
              <b> To Do List</b>
            </h1>
          </span>
          {/* Add To Do Button*/}
          <span className="col-6 p-2 d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Add To Do
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
