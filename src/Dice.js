class Dice {
  roll() {
    return Math.floor(Math.random() * 6) + 1; // Número entre 1 y 6
  }
}

export default Dice;
