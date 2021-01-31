import React from "react";
import './App.css';
import Nav from "./Nav";
import Song from "./Song";
import Player from "./Player";
import Library from "./Library";
import songData from "./songData";

const App = () => {

  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0,animationPercentage: 0,});

  return (
    <div className="app">
      <Nav />
      <Song />
      <Player />
      <Library />
      <audio></audio>
    </div>
  );
}

export default App;
