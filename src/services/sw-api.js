const BASE_URL= 'https://swapi.dev/api/'

//get all the starships resources

export function getStarShips(){
    return fetch(BASE_URL + 'starships/').then(res=> res.json())
}