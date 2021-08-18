import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import CompletedContainer from "./CompletedContainer";

export default function App() {
  return (
    <div>
      {/* The header block and the outermost container */}
      <span className="d-block p-5 bg-primary text-white"></span>
      <div className="m-5 p-4">
        {/* The Header component containing the title and the Add button*/}
        <Header />
        <br />
        {/* The SearchBar component containing the search bar*/}
        <div className="p-3 m-1">
          <SearchBar />
        </div>
        <div>
          {/* The NoteContainer component containing the note title and the body*/}
          <NoteContainer />
          {/* The CompletedContainer component containing the completed note title with style*/}
          <CompletedContainer />
        </div>
        <br />
        <div className="text-center">
          Copyright &#169; <i>Karunesh Tripathi</i>
        </div>
      </div>
    </div>
  );
}
