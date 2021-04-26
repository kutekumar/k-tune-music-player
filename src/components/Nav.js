import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav>
            <h1>K-Tunes</h1>
            <button onClick={()=> setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon icon={faMusic} />
                Playlist
            </button>
        </nav>
    );
}

export default Nav;