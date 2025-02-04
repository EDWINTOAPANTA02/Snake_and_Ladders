import Board from './Board.js';
import Player from './Player.js';
import Dice from './Dice.js';

class Game {
  constructor(playersNames) {
    this.board = new Board(100, { 16: 6, 49: 11, 46: 25, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80 }, { 2: 38, 7: 14, 8: 31, 15: 26, 28: 84, 21: 42, 36: 44, 51: 67, 78: 98, 87: 94, 71: 91 });
    this.players = playersNames.map((name) => new Player(name));
    this.dice = new Dice();
    this.winner = null;
    this.currentPlayerIndex = 0; // Índice del jugador actual
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
      document.getElementById('dado').innerText = `Tirada: ${roll}`; // Actualizar el número del dado
    }
  }

  // Método start modificado para controlar el flujo de turnos
  start() {
    if (this.winner) {
      console.log("El juego ya ha terminado. Reinicia el juego.");
      return; // Si ya hay un ganador, no hacer nada.
    }

    // Jugar un turno por vez
    const player = this.players[this.currentPlayerIndex];
    this.playTurn(player);

    // Avanzar al siguiente jugador
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;

    // Si hay un ganador, termina el juego
    if (this.winner) {
      console.log(`El juego ha terminado. ¡${this.winner} es el ganador!`);
    }
  }

  updatePlayerPosition(player) {
    const playerDiv = document.getElementById(`player-${player.name}`);
    if (playerDiv) {
      playerDiv.innerText = `${player.name} está en la casilla ${player.position}`;
    }
  }
}

export default Game;
