import React from 'react';
import "./Player.css";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = ({setSongs, currentSong, songs, audioRef, isPlaying, setIsPlaying, setCurrentSong}) => {

    const activeLibraryHan = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id){
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
    }
    const playSongHan = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            setIsPlaying(!isPlaying);
            audioRef.current.play();
        }
    };    
    const skipSongHan = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === "skip-forward"){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHan(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === "skip-back"){
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                activeLibraryHan(songs[(currentIndex - 1) % songs.length]);
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHan(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    };    
    return (
        <div className="player">
            <div className="play-control">
                <SkipPreviousIcon style={{cursor:"pointer", color:"#531253"}} onClick={() => skipSongHan('skip-back')} className="skipIcon" />
                <FontAwesomeIcon onClick={playSongHan} style={{cursor:"pointer", color:"#531253",margin:"0 20px"}} className="play" size="3x" icon={isPlaying ? faPause : faPlay}/>
                <SkipNextIcon style={{cursor:"pointer", color:"#531253"}} onClick={() => skipSongHan("skip-forward")} className="skipIcon" />
            </div>
        </div>
    );
}

export default Player;
