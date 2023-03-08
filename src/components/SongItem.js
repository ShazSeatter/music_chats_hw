import React from "react";


const SongItem = function({song}) {
    return (
         <li>
            <h3>1.{song["im:name"].label}</h3>
            <p>{song["im:artist"].label}</p>
         </li>
    )
}

export default SongItem;