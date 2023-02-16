import React from 'react'

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
                <button>Show details</button>
            </div>

        </div>
    )

}

export default PlayerCard