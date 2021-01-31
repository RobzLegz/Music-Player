import React, { useRef, useState } from "react";
import './App.css';
import Nav from "./Nav";
import Song from "./Song";
import Player from "./Player";
import Library from "./Library";
import songData from "./songData";

const App = () => {

  const audioRef = useRef(null);
  const [songLibraryStatus, setSongLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0,animationPercentage: 0,});

  const updateTimeHan = (e) => {
    const currentTime = e.target.currentTime;
    const songDuration = e.target.songDuration;
    const roundedCurrentTime = Math.round(currentTime);
    const roundedSongDuration = Math.round(songDuration);
    const playerAnimation = Math.round((roundedCurrentTime / roundedSongDuration) * 100);
    setSongInfo({...songInfo, currentTime: currentTime, duration: songDuration, animationPercentage: playerAnimation});
  }

  const endSongHan = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying){
      audioRef.current.play();
    }
  }

  return (
    <div className="app">
      <Nav songLibraryStatus={songLibraryStatus} setSongLibraryStatus={setSongLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player 
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          songs={songs}
          audioRef={audioRef} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          currentSong={currentSong}
        /> 

      <Library 
        setSongs={setSongs}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        songLibraryStatus={songLibraryStatus}
      />
      <audio 
        onTimeUpdate={updateTimeHan} 
        ref={audioRef} 
        onLoadedMetadata={updateTimeHan}
        src={currentSong.audio}
        onEnded={endSongHan}
      ></audio>
    </div>
  );
}

export default App;
