import React from "react";
import { fetchAllPlayers } from "../api-adapter";
import { SubmissionForm } from "./";
import {PlayerDisplay} from "./"

const Main = () => {
    return(
        <div id="main">
            <SubmissionForm />
            <PlayerDisplay />
        </div>
    )
}

export default Main