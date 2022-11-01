const activityQuery = "https://www.boredapi.com/api/activity?participants=1";
const resultsCard = document.getElementById("results-card");
const howToUse = document.getElementById("how-to-use");
const searchCard = document.getElementById("search-card");
const historyCard = document.getElementById("history-card");
const historyList = document.getElementById("history-list");
const pokemonName = document.getElementById("pokemon-name");
const errorModal = document.getElementById("error-modal");
let errorInput = document.getElementById("error-input");
const pokemonInfoCard = document.getElementById("pokemon-info-card");
const activityCard = document.getElementById("activity-card");
const backButtonCard = document.getElementById("back-button-card");
let searchHistory = JSON.parse(localStorage.getItem("pokemon-search")) || [];
// let userHistory = $("#user-input").val();


function showResults(userInput) {
    // makes the other cards go away

   // var userInput = $("#user-input").val();
    const pokemonQuery = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    

    fetch(pokemonQuery)
    .then(function (response) {
        if (!response.ok || userInput == "" ) {
            errorModal.style.display = "block";
            errorInput.textContent = userInput;
            $("#error-input").val() = !response.ok;
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
        pokemonInfoCard.append(pokemonPicture);
        const baseExperiance = document.createElement("p");
        baseExperiance.innerHTML = "Base Experiance: " + response.base_experience;
        pokemonInfoCard.append(baseExperiance);
        const weight = document.createElement("p");
        weight.innerHTML = "Weight: " + response.weight;
        pokemonInfoCard.append(weight);
        const height = document.createElement("p");
        height.innerHTML = "Height: " + response.height;
        pokemonInfoCard.append(height);
        const pokemonType = document.createElement("p");
        pokemonType.innerHTML = "Type: " + response.types[0].type.name;
        pokemonType.className = "block";
        pokemonInfoCard.append(pokemonType);
        const abilityTitle = document.createElement("h1");
        abilityTitle.className = "title is-4 block";
        abilityTitle.innerHTML = "Abilities";
        pokemonInfoCard.append(abilityTitle);
        for (i = 0; i < response.abilities.length; i++) {
            const listEl = document.createElement("li");
            listEl.className = "block";
            const listItem = response.abilities[i].ability.name;
            listEl.textContent = listItem;
            pokemonInfoCard.append(listEl);
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
            activityCard.append(pokemonActivity);
        })
}

$("#search-button").click(function () {
    const searchItem = $("#user-input").val();
    showResults(searchItem);
    searchHistory.push(searchItem);
    localStorage.setItem("pokemon-search", JSON.stringify(searchHistory));
    renderPokemon();
});

$("#clear-button").click(function () {
    localStorage.clear();
    searchHistory = [];
    renderPokemon();
})

  //local storage & Clear Burron
console.log(searchHistory);
  //render item for each search
function renderPokemon() {
    historyList.innerHTML = "";
    
    for (var i = 0; i < searchHistory.length; i++) {
        var historyItem = document.createElement("button");
        historyItem.className = "button hero-color is-fullwidth";
        historyItem.innerHTML = searchHistory[i];
        historyItem.setAttribute("value", searchHistory[i]);
        console.log(searchHistory);
        historyItem.addEventListener("click", function() {
            showResults(historyItem.value);    
           // console.log(historyItem.value);
        })
        
        historyList.append(historyItem);
    }

};




renderPokemon();

 //clear button
// function clearHistory (
//         historyCard.;
// );

// clearSH.addEventListener('click', clearHistory ());



