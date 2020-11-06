const axios = require("axios");
const apiUrl = "https://www.speedrun.com/api/v1/games?name=";
const input = document.querySelector(".search-game");
const gameName = document.querySelector(".game-name");
const gameImage = document.querySelector(".game-image");
const {gameService} = require('../services/game-post')
const {createGamePost} = gameService

=z

function getGameData() {
    axios.get(apiUrl + input.value)
        .then(function (response) {
            gameName.innerHTML = response.data.forms[0].name;
            gameImage.src = response.data.sprites.front_default;
        })
        .catch(function (error) {
            gameName.innerHTML = "(An error has occurred.)";
            gameImage.src = "";
        });
}

var button = document.querySelector("search-button");
button.addEventListener("click", getGameData);




