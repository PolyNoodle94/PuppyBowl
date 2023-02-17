import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { fetchPlayerFromId } from '../api-adapter'

const PlayerStats = () => {

    const [player, setPlayer] = useState({})

    let { id } = useParams()

    const getPlayer = async () => {

        try{
            
            let value = await fetchPlayerFromId(id)
            setPlayer(value)
           

        } catch (error) {
            console.log("error: " + error.message)
        }

    }

    useEffect(()=> {

        getPlayer()

    }, [])
    

    // console.log("player1 name: " + player1.name)


    return(
        <div id="playerStatsContainer">

        <div id="playerStats">
            <div id="divPlayerTop">
                <h3 id="playerName">{player.name }</h3>
                <h3 id="playerId">#{player.id}</h3>
            </div>

            <div id="divPlayerMiddle">
                <h4>Breed: {player.breed}</h4>
                <h4>Status: {player.status}</h4>
                <h4>Team: {player.teamId}</h4>
            </div>

            <div id="divPlayerBottom">
                <Link to="/"><button>Go Back</button></Link>
            </div>

        </div>
        </div>
    )

}

export default PlayerStats