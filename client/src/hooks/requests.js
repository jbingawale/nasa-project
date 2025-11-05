// Load planets and return as JSON.
const API_URL = 'http://localhost:8000/v1'
async function httpGetPlanets() {
  // Fix the typo here:
  const response = await fetch(`${API_URL}/planets`)
  return await response.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json()
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {

    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(launch),
    })
  } catch (error) {
    console.log(error)
    return {
      ok: false
    }
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
    method: 'delete'
  })
  } catch(error) {
    console.log(error)
    return {
      ok: false
    }
  }
  // TODO: Once API is ready.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};