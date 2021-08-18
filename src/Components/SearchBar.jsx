import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-light rounded-pill shadow col-5 ">
      <div className="input-group">
        <input
          type="search"
          placeholder="Search To Do"
          className="form-control border-0 bg-light"
          style={{ borderRadius: "2rem" }}
        />
        <div>
          <button type="submit" className="btn btn-link text-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
