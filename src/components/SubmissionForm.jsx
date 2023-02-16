import React from 'react'

const SubmissionForm = () => {

    return(
        <form id="submitForm">
            <label className="label">Name: </label>
            <input type="text" className="inputBox"></input>
            <label className="label">Breed: </label>
            <input type="text" className="inputBox"></input>
            <input type="submit" value="Submit" className="submitButton"></input>
        </form>
    )

}

export default SubmissionForm