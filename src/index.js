import Game from './Game.js';  // Importas solo el archivo 'Game.js'

let game;  // Se declara fuera para que persista

document.addEventListener('DOMContentLoaded', function () {
  function startGame() {
    if (!game) {  // Solo se crea el juego una vez
      game = new Game(["Player 1", "Player 2"]);
    }
    game.start();
  }

  document.getElementById('start-button').addEventListener('click', startGame);
});
