const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com";

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/2301-ftb-et-web-ft/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error: " + error.message);
  }
};

export const fetchPlayerFromId = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/2301-ftb-et-web-ft/players/${id}`
    );
    const result = await response.json();
    console.log("result keys: " + Object.keys(result.data.player));
    console.log("result values: " + Object.values(result.data.player));
    return result.data.player;
  } catch (error) {
    console.log("error: " + error.message);
  }
};
