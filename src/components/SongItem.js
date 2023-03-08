import React from "react";


const SongItem = function({song, index}) {
    
    return (
        <div className="song-item-componet">
            <h3>{index + 1}. {song["im:name"].label}</h3>
            <p>{song["im:artist"].label}</p>
        </div>
    )
}

export default SongItem;