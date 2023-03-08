import React, {useEffect, useState} from "react";
import SongsList from "../components/SongsList";


const SongsContainer = function () {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = async function () {
        const response = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
        const songs = await response.json();
        setSongs(songs.feed.entry)
        console.log(songs.feed.entry) // now it is returning an array to work with
    }


    return (
        <SongsList songs={songs}/> // the array
    )
}

export default SongsContainer; 