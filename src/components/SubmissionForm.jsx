import React from 'react'

const SubmissionForm = () => {

    return(
        <form  onSubmit={(event) => {

            event.preventDefault();
            console.log("PREVENTED BITCH")

        }} id="submitForm">
            <label className="label">Name: </label>
            <input type="text" className="inputBox"></input>
            <label className="label">Breed: </label>
            <input type="text" className="inputBox"></input>
            <input type="submit" value="Search" className="submitButton"></input>
        </form>
    )

}

export default SubmissionForm