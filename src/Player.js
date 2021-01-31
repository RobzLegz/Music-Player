import React from 'react';
import "./Player.css";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Player = ({setSongs, currentSong, songs, audioRef, isPlaying, setIsPlaying, setSongInfo, songInfo, setCurrentSong}) => {

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

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHan = (e) => {
        setSongInfo({ ...songInfo, current: e.target.value });
        audioRef.current.currentTime = e.target.value;
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

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{songInfo.duration ? getTime(songInfo.currentTime) : "0:00"}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`, }} className="track">
                    <input
                        onChange={dragHan}
                        min={0} 
                        max={songInfo.duration || 0} 
                        value={songInfo.currentTime} 
                        type="range"
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <SkipPreviousIcon onClick={() => skipSongHan('skip-back')} className="skipIcon" />
                <PlayCircleFilledIcon onClick={playSongHan} className="playButton" />
                <SkipNextIcon onClick={() => skipSongHan("skip-forward")} className="skipIcon" />
            </div>
        </div>
    );
}

export default Player;
