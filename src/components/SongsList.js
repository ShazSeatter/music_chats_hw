import React from "react";
import SongItem from "./SongItem";

;

const SongsList = function ({songs}) {

    const songItems = songs.map((song, index)=> {
        return <SongItem key={song.id.attributes["im:id"]} song={song} index={index}/>
        });

    console.log(songItems)

    return (
        <div className="song-list-component">
            <ul>
                {songItems}
            </ul>
        </div>
    )
}

export default SongsList;