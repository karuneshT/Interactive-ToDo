import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import CompletedContainer from "./CompletedContainer";

export default function App() {
  return (
    <div>
      <span className="d-block p-5 bg-primary text-white"></span>
      <div className="m-5 p-4">
        <Header />
        <br />
        <div className="p-3 m-1">
          <SearchBar />
        </div>
        <div>
          <NoteContainer />
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
