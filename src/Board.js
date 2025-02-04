class Board {
  constructor(size = 100, snakes = {}, ladders = {}) {
    this.size = size;
    this.snakes = snakes;
    this.ladders = ladders;
  }

  moveToken(position) {
    if (this.snakes[position]) return this.snakes[position];
    if (this.ladders[position]) return this.ladders[position];
    return position;
  }
}

export default Board;
