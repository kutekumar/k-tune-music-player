import React, {useState, useRef} from "react";
//Import Styles
import "./styles/app.scss";
//Import Data
import myTune from "./data"

// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
    //Audio Reference
    const audioRef = useRef(null);

    //States
    const [songInfo,
        setSongInfo] = useState({currentTime: 0, duration: 0, sliderPercentage:0});

    const [songs,
        setSongs] = useState(myTune());
    const [currentSong,
        setcurrentSong] = useState(songs[0]);
    const [isPlaying,
        setIsPlaying] = useState(false);
    
    const [libraryStatus, setLibraryStatus] = useState(false);
    

    const timeUpdateHandler = (event) => {
        const current = event.target.currentTime;
        const duration = event.target.duration;
        //Calculate percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const slider = Math.round((roundedCurrent / roundedDuration)*100);

        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
            sliderPercentage:slider
        })
    }


    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    
        await setcurrentSong(songs[(currentIndex + 1) % songs.length]);
        isPlaying && audioRef.current.play();
        
    }

    return (
        <div className={`App ${libraryStatus && 'Library-active'}`}>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player
                audioRef={audioRef}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                currentSong={currentSong}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
                songs={songs}
                setCurrentSong={setcurrentSong}
                setSongs={setSongs}
                />
            <Library
                audioRef={audioRef}
                songs={songs}
                setcurrentSong={setcurrentSong}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <audio
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default App;
