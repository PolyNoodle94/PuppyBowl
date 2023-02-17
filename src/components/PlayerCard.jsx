import React from 'react'
import { Link } from 'react-router-dom'

const PlayerCard = (props) => {

    let name = props.player.name
    let id = props.player.id
    let picture = props.player.imageUrl


    return(
        <div id="playerCard">
            <div id="divPlayerTop">
                <h3 id="playerName">{name}</h3>
                <h3 id="playerId">#{id}</h3>
            </div>

            <div id="divPlayerMiddle">
                <img src={picture} alt="" id="playerImage"></img>
            </div>

            <div id="divPlayerBottom">
                <Link to={`${id}`}><button >Show details</button></Link> 
                {/* Right on this button, we need to make it so that onClick changes the page to /player-stats, and adds a <PlayerStats player={props.player}/> component  */ }
            </div>

        </div>
    )

}

export default PlayerCard