const API_KEY = '333d32c02b4d61dbbb9390bbbaf41213';
const BASE_URL = 'https://api.the-odds-api.com'

async function getUpcomingMatches({ setMatches }) {
    // const sportsPath = '/v4/sports/?apiKey=' + API_KEY;
    const scoresPath = '/v4/sports/soccer_portugal_primeira_liga/scores/?apiKey=' + API_KEY
    
    // const sportsUrl = BASE_URL + sportsPath
    const scoresUrl = BASE_URL + scoresPath;


    // fetch(sportsUrl, { mode: 'no-cors' })
    // .then((res) => res.json())
    // .then((res) => res);

    return await fetch(scoresUrl)
    .then((res) => res.json())
}

export default getUpcomingMatches;