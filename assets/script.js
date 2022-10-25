const tumblrAPI = "0B6Ja16waz4Tax4UBmaXMENKQ0acfU786bRUMEs7KpjUE8FDv0";
const tumblrQuery = "http://api.tumblr.com/v2/blog/blog.tumblr.com/info?api_key=" + tumblrAPI;
const marvelQuery = "https://pokeapi.co/api/v2/pokemon/";

function showResults() {
    // makes the other cards go away
    $("#how-to-use").addClass("style", "display: none");
    $("#search-card").addClass("style", "display: none");
    $("#history-card").addClass("style", "display: none");

}


function fetchMarvel() {
    fetch(marvelQuery)
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
fetchMarvel();