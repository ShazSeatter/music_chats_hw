import React from "react";


const SongItem = function({song, index}) {
    return (
        <>
        <li className="song-item-componet">
            <h3>{index + 1}. {song["im:name"].label}</h3>
            <p>{song["im:artist"].label}</p>
        </li>
        <hr/>
        </>
    )
}

export default SongItem;