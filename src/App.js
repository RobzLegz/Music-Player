import React from "react";
import './App.css';
import Nav from "./Nav";
import Song from "./Song";
import Player from "./Player";
import Library from "./Library";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Song />
    </div>
  );
}

export default App;
