import Board from './Board.js';
import Player from './Player.js';
import Dice from './Dice.js';

class Game {
  constructor(playersNames) {
    this.board = new Board(100, { 16: 6, 49: 11, 46: 25, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80 }, { 2: 38, 7: 14, 8: 31, 15: 26, 28: 84, 21: 42, 36: 44, 51: 67, 78: 98, 87: 94, 71: 91 });
    this.players = playersNames.map((name) => new Player(name));
    this.dice = new Dice();
    this.winner = null;
  }

  playTurn(player) {
    const roll = this.dice.roll();
    console.log(`${player.name} número del dado: ${roll}`);
    
    player.move(roll, this.board);

    console.log(`${player.name} está en la casilla ${player.position}`);

    // Mostrar la posición en la interfaz
    this.updatePlayerPosition(player);

    if (player.position === this.board.size) {
      this.winner = player.name;
      console.log(`🎉 ${player.name} gana! 🎉`);
      document.getElementById('dado').innerText = `${player.name} ganó!`;
    } else {
      document.getElementById('dado').innerText = roll; // Actualizar el número del dado
    }
  }

  start() {
    console.log("🎲 Iniciando el juego!");

    while (!this.winner) {
      for (const player of this.players) {
        this.playTurn(player);
        if (this.winner) break;
      }
    }
  }

  updatePlayerPosition(player) {
    const playerDiv = document.getElementById(`player-${player.name}`);
    if (playerDiv) {
      playerDiv.innerText = `${player.name} está en la casilla ${player.position}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  function startGame() {
    const game = new Game(["Player 1", "Player 2"]);
    game.start();
  }

  document.getElementById('start-button').addEventListener('click', startGame);
});
