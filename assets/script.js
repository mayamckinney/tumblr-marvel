const tumblrAPI = "0B6Ja16waz4Tax4UBmaXMENKQ0acfU786bRUMEs7KpjUE8FDv0";
const marvelAPI = "97fdb8746e35fdb9022166bdf5c5409e";
const tumblrURL = "http://api.tumblr.com/v2/blog/blog.tumblr.com/info?api_key=";
const marvelURL = "http://gateway.marvel.com/v1/public/comics?apikey=";
const tumblrQuery = "http://api.tumblr.com/v2/blog/blog.tumblr.com/info?api_key=" + tumblrAPI;
const marvelQuery = "https://pokeapi.co/api/v2/pokemon/";

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