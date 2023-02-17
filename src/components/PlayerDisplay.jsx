import React from 'react'

import { PlayerCard } from "./"

const PlayerDisplay = (props) => {

    const players = props.players

    return(
        <div id="playerDisplay">
           
           {
            players.map((player) => {

                if( !(player.name == "Lamont") && !(player.name == "Lamont 2") ) {

                    console.log("player name: " + player.name)
                    return(
                        <PlayerCard player={player} key={`${player.name} id: ${player.id}`}/>
                    )

                }

            })
           }
           

        </div>
    )

}

export default PlayerDisplay