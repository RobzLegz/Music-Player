import React from 'react';
import "./Player.css";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

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
                <SkipPreviousIcon onClick={() => skipSongHan('skip-back')} className="skipIcon" />
                <PlayCircleFilledIcon onClick={playSongHan} className="playButton" />
                <SkipNextIcon onClick={() => skipSongHan("skip-forward")} className="skipIcon" />
            </div>
        </div>
    );
}

export default Player;
