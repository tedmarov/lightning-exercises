let starshipsDB = []

export const UseStarships = () => {
   return starshipsDB.slice()
}

export const GetStarships = () => {
    return fetch("https://swapi.dev/api/starships/")
        .then(response => response.json())
        .then(
            parsedStarships => {
                console.table(parsedStarships.results)
                starshipsDB = parsedStarships.results
            }    
        )    
}

export const StarshipList = () => {
    GetStarships().then(() => {
        const starshipArray = UseStarships()
        render(starshipArray)
    })
}

const starshipHTML = starshipObject => {
    return `
    <div class="starshipCard">
        <p>${starshipObject.name}: ${starshipObject.manufacturer}</p>            
    </div>`
}

const render = (starshipArray) => {
    const Container = document.querySelector("#container")

    let starshipsHTML = starshipArray.map(ship => {
        return starshipHTML(ship)
    }).join("")

    Container.innerHTML = `
    <article>
    <h3>Star Wars Starships</h3>
    ${starshipsHTML}
    </article>
    `
}