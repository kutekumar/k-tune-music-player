import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({audioRef,songs, setcurrentSong, setIsPlaying, isPlaying, setSongs,libraryStatus, setLibraryStatus}) => {
    return (
        <div className={`library ${libraryStatus && "active-library"}` }>
            <h2>Kumar's Playlist</h2>
            <div className="library-songs">
                {songs.map((song) =>
                    <LibrarySong
                        songs={songs}
                        song={song}
                        setCurrentSong={setcurrentSong}
                        key={song.id}
                        id={song.id}
                        audioRef={audioRef}
                        setIsPlaying={setIsPlaying}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                        libraryStatus={libraryStatus}
                        setLibraryStatus={setLibraryStatus}
                    />
                )}

            </div>
        </div>
    )
}

export default Library;