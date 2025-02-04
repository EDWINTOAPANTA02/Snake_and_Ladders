import Game from './Game.js';  

let game;  // Se declara fuera para que persista

document.addEventListener('DOMContentLoaded', function () {
  function startGame() {
    if (!game) {  
      game = new Game(["Player 1", "Player 2"]);
    }
    game.start();
  }

  document.getElementById('start-button').addEventListener('click', startGame);
});
