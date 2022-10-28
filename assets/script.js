// var userInput = document.getElementById("user-input");
const activityQuery = "http://www.boredapi.com/api/activity?participants=1";
const resultsCard = document.getElementById("results-card");
const howToUse = document.getElementById("how-to-use");
const searchCard = document.getElementById("search-card");
const historyCard = document.getElementById("history-card");
const pokemonName = document.getElementById("pokemon-name");
const errorModal = document.getElementById("error-modal");



function showResults() {
    // makes the other cards go away
    
    var userInput = $("#user-input").val()
    const pokemonQuery = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    
    fetch(pokemonQuery)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();

        }
        
        return response.json();
    })
    
    .then(function (response) {   
        console.log(response);
        howToUse.style.display = "none";
        searchCard.style.display = "none";
        historyCard.style.display = "none";
        resultsCard.style.display = "block";
        pokemonName.innerHTML = response.name;
        const pokemonPicture = document.createElement("img");
        pokemonPicture.setAttribute("src", response.sprites.front_default)
        resultsCard.append(pokemonPicture);
        const baseExperiance = document.createElement("p");
        baseExperiance.innerHTML = "Base Experiance: " + response.base_experience;
        resultsCard.append(baseExperiance);
        const weight = document.createElement("p");
        weight.innerHTML = "Weight: " + response.weight;
        resultsCard.append(weight);
        const height = document.createElement("p");
        height.innerHTML = "Height: " + response.height;
        resultsCard.append(height);
        const pokemonType = document.createElement("p");
        pokemonType.innerHTML = "Type: " + response.types[0].type.name;
        pokemonType.className = "block";
        resultsCard.append(pokemonType);
        const abilityTitle = document.createElement("h1");
        abilityTitle.className = "title is-4 block";
        abilityTitle.innerHTML = "Abilities";
        resultsCard.append(abilityTitle);
        for (i = 0; i < response.abilities.length; i++) {
            const listEl = document.createElement("li");
            listEl.className = "block";
            const listItem = response.abilities[i].ability.name;
            listEl.textContent = listItem;
            resultsCard.append(listEl);
        }

    })

    fetch(activityQuery)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();
    })

    .then(function (response) {
        console.log(response);
        const pokemonActivity = document.createElement("p");
        pokemonActivity.className = "block is-size-7 is-italic";
        pokemonActivity.innerHTML = "This pokemon's favorite activity is to: " + response.activity + "! How fun!";
        resultsCard.append(pokemonActivity);
    })

    //makes results card appear


}

$("#search-button").click(function () {
    showResults();
})


  



