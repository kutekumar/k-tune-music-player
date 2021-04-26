import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({
    audioRef,
    currentSong,
    isPlaying,
    setIsPlaying,
    setSongInfo,
    songInfo,
    songs,
    setCurrentSong,
    setSongs
}) => {

    //Event Handlers

    const getTime = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

    }

    const dragHandler = (event) => {
        let dragTime = event.target.value;
        audioRef.current.currentTime = dragTime;
        setSongInfo({
            ...songInfo,
            currentTime: dragTime
        });

    }

    const skipTrackHandler = async(direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {

            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);

        }
        if (direction === 'skip-back') {

            setCurrentSong(songs[currentIndex - 1]);
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                isPlaying && audioRef
                    .current
                    .play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        isPlaying && audioRef
            .current
            .play();

    }

    const activeLibraryHandler = (nextPrev) => {
        //Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongs);

    }

    //Event Handlers
    const playSongHandler = () => {
        //Ref
        if (isPlaying) {
            audioRef
                .current
                .pause();
            setIsPlaying(false);
        } else {
            audioRef
                .current
                .play();
            setIsPlaying(true);
        }

    }

    //Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.sliderPercentage}%)`
    }

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>

                <div
                    style={{
                    background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`
                }}
                    className="track">
                    <input
                        onChange={dragHandler}
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"/>
                    <div style={trackAnim} className="animate-track"></div>
                </div>

                <p>{songInfo.duration
                        ? getTime(songInfo.duration)
                        : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-back')}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}/>
                <FontAwesomeIcon
                    className="play"
                    onClick={playSongHandler}
                    size="2x"
                    icon={!isPlaying
                    ? faPlay
                    : faPause}/>
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-forward')}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}/>
            </div>

        </div>
    )
}

export default Player;