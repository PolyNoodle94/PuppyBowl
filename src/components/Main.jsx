import React, { useState, useEffect} from "react";

//api fetch methods
import { fetchAllPlayers } from "../api-adapter";

//importing components
import { SubmissionForm } from "./";
import { PlayerDisplay } from "./"

const Main = () => {

    const [players, setAllPlayers] = useState([])

    const getAllPlayers = async () => {

        const fetchedPlayers = await fetchAllPlayers()
        setAllPlayers(fetchedPlayers.data.players)

    }

    useEffect(() => {

        getAllPlayers()

    }, [])

    return(
        <div id="main">
            <SubmissionForm />
            <PlayerDisplay players={players}/>
        </div>
    )
}

export default Main