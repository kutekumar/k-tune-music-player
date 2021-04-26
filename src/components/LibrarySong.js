import React from "react"


const LibrarySong = ({ songs, song,  setCurrentSong,id, audioRef, setIsPlaying, isPlaying, setSongs, libraryStatus, setLibraryStatus}) => {
    const songSelectHandler = async ()=>{
       // const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(song);

        setLibraryStatus(!libraryStatus);
        //Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active:false
                }
            }
        })
        setSongs(newSongs);

        //Check if the song is playing
        
        isPlaying && audioRef.current.play();
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active && 'selected' }`}>
            <img alt={song.name} src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;