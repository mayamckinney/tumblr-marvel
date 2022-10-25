const tumblrAPI = "0B6Ja16waz4Tax4UBmaXMENKQ0acfU786bRUMEs7KpjUE8FDv0";
const tumblrQuery = "http://api.tumblr.com/v2/blog/blog.tumblr.com/info?api_key=" + tumblrAPI;
const pokemonQuery = "https://pokeapi.co/api/v2/pokemon/";
const userInput = $("#user-input");

function showResults() {
    // makes the other cards go away
    $("#how-to-use").addClass("style", "display: none");
    $("#search-card").addClass("style", "display: none");
    $("#history-card").addClass("style", "display: none");

    fetch(pokemonQuery)
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();
    })

    .then(function (response) {
        console.log(response.results);    
        if (response.results.includes(userInput)) {
        $("#results-card").removeClass("style", "display: none");
    }
    })

    //makes results card appear




}


function fetchPokemon() {
    fetch(pokemonQuery)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })

        .then(function (response) {
            console.log(response.results);
        })
}

function fetchTumblr() {
    fetch(tumblrQuery)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })

        .then(function (response) {
            console.log(response);
        })
}

fetchTumblr();
fetchPokemon();