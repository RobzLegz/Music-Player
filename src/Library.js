import React from 'react';
import "./Library.css";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs,songLibraryStatus}) => {
    return (
        <div className={`library ${songLibraryStatus ? 'active-library' : ""}`}>
            <div className="libraryHeader">
                <h2>Library</h2>
            </div>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                        setSongs={setSongs}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        songs={songs} 
                        setCurrentSong={setCurrentSong} 
                        song={song}
                        key={song.id}
                        id={song.id}
                    />
                ))}
            </div>            
        </div>
    );
}

export default Library;
