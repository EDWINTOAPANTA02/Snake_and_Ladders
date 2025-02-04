class Player {
  constructor(name) {
    this.name = name;
    this.position = 1; // Todos comienzan en el cuadro 1
  }

  move(steps, board) {
    let newPosition = this.position + steps;

    if (newPosition > board.size) {
      console.log(`${this.name} no puede moverse más allá del tablero. Intentó moverse a la posición ${newPosition}`);
      return; 
    }

    this.position = board.moveToken(newPosition);
  }
}

export default Player;

