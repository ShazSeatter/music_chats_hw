import React from "react";
import SongItem from "./SongItem";

;

const SongsList = function ({songs}) {
    // const songItems = songs.map((song, index)=> {
    // return <h3 key={index}>{song["im:artist"].label}</h3>
    // })

    const songItems = songs.map((song, index)=> {
        return <SongItem key={index} song={song}/>
        });

    console.log(songItems)

    return (
        <div className="song-list-component">
            <ul className="song-item-componet">
                {songItems}
            </ul>
        </div>
  
    )
}

export default SongsList;