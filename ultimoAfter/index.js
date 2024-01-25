document.addEventListener("DOMContentLoaded",()=>{
    const charactersContainer = document.getElementById("characters-container");

    //url de la api

    const apiUrl = "https://dragonball-api.com/api/characters?gender=Male";

    //realizar la solicitud usar fetch

    fetch(apiUrl)
       .then(response => {
        if (!response.ok){
            throw new Error('la solicitud no fue exitosa')
        }
        return response.json()
       })
        .then(characters =>{
            renderCharacters(characters)
        })
        .cath(error =>{
            console.log("error al obtener los personajes", error)
        })
    
    function renderCharacters(characters){
    //crear un elemento por cada personaje en HTML

        characters.forEach(character => {
            const characterElement = document.createElement("div")
            characterElement.innerHTML =`
                <h2 >${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <p>raza: ${character.race}</p>
            
            `;
            charactersContainer.appendChild(characterElement);
        });


    }

    })
