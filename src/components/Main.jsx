import React from "react";
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