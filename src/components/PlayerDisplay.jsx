import React from 'react'

import { PlayerCard } from "./"

const PlayerDisplay = (props) => {

    const players = props.players

    return(
        <div id="playerDisplay">
           
           {
            players.map((player) => {

                return(
                    <PlayerCard player={player} key={`${player.name} id: ${player.id}`}/>
                )

            })
           }
           

        </div>
    )

}

export default PlayerDisplay