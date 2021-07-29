let starshipsDB = []

export const UseStarships = () => {
   return starshipsDB.slice()
}

export const GetStarships = () => {
    return fetch("https://swapi.dev/api/starships/")
        .then(response => response.json())
        .then(
            parsedStarships => {
                console.table(parsedStarships[0])
                starshipsDB[0] = parsedStarships
            }
            
        )
    
    
}
