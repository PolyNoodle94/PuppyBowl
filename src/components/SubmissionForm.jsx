import React, {useState} from 'react'


//api fetch methods
import { fetchAllPlayers } from "../api-adapter";

const SubmissionForm = (props) => {

    let [puppyName, setPuppyName] = useState('')
    
    return(
        <div id="navBar">

        <form  onSubmit={(event) => {

            event.preventDefault();
            
            props.players.map((player) => {

                let selectedPlayer= {}

                if (player.name === puppyName) {

                    selectedPlayer = player
                    props.setAllPlayers([selectedPlayer])

                }

            })

        }} id="submitForm">
            <label className="label">Name: </label>
            <input name="dogName" type="text"  value={puppyName} className="inputBox" onChange={(event) => {
                setPuppyName(event.target.value)
            }}></input>
            <input type="submit" value="Search" className="submitButton"></input>
        </form>

        <button onClick={ async () => {

            props.getAllPlayers();

        }} className="resetButton">Reset Display</button>

        </div>

    )

}

export default SubmissionForm