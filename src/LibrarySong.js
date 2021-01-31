import React from 'react';
import "./LibrarySong.css";

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {

    const selectLibrarySongHan = async () => {

        const selectedLibrarySong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedLibrarySong[0]);

        const newSongs = songs.map((song) => {
            if (song.id === id){
                return{
                    ...song,
                    active: true,
                };
            }else{
                return{
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        if (isPlaying) audioRef.current.play();
    };

    return (
        <div className={`librarySong ${song.active ? "selectedLibrarySong" : ""}`}>
            <img className="libraryAlbumImage" src={song.cover} alt={song.name}/>
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;
