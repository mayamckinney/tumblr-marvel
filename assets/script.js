// var userInput = document.getElementById("user-input");
const activityQuery = "http://www.boredapi.com/api/activity?participants=1";
const resultsCard = document.getElementById("results-card");
const howToUse = document.getElementById("how-to-use");
const searchCard = document.getElementById("search-card");
const historyCard = document.getElementById("history-card");
const historyList = document.getElementById("history-list");
const pokemonName = document.getElementById("pokemon-name");
const errorModal = document.getElementById("error-modal");

var clearSH = $("#clear-button");
var history = [];

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
    

});

  //local storage & Clear Burron

  //render item for each search
function renderPokemon() {
    historyList.innerHTML = "";
    historyList.textContent = history.length;

    for (var i = 0; i < history.length; i++) {
        var history = history[i];

        var li = document.createElement("li");
        li.textContent = history;
        li.setAttribute("data-index", i);
        
        history.appendChild(li);
    }
};

//renders the search to historyCard
function init() {
    var storedHistory = JSON.parse(localStorage.getItem("history"));

    if ( storedHistory!== null) {
        history = storedHistory;
    }
    renderPokemon();
};


function storePokemon () {
    localStorage.setItem ("history", JSON.stringify(history));
};

searchCard.addEventListener("click", function(event) {
    event.preventDefault();

    var historyText = historyList.value.trim();

    if (historyText === "") {
        return;
    }

    history.pushState(historyText);
    historyList.value = "";

    storePokemon();
    renderPokemon();
 });




init();

 //clear button
// function clearHistory (
//         historyCard.;
// );

// clearSH.addEventListener('click', clearHistory ());



