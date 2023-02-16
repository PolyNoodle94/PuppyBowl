const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com"

export const fetchAllPlayers = async() => {
    try {
    const response = await fetch(`${BASE_URl}/api/2301-ftb-et-web-ft/players`)
    const result = await response.json()
    return result
    } catch (error) {
        console.log(error.message)
    }
}

