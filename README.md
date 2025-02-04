# Snake and Ladders Game

Este es un juego de **Serpientes y Escaleras** implementado en JavaScript. El juego tiene un tablero con 100 casillas, serpientes y escaleras, y un dado para avanzar. Los jugadores se turnan para tirar el dado y avanzar, hasta que uno llegue a la casilla final y gane.

## Estructura del Proyecto

### 1. **`Board.js`**
Define la clase `Board` que maneja el tablero del juego, incluyendo las serpientes y escaleras. Cada vez que un jugador se mueve, verifica si hay una serpiente o escalera en la casilla y lo mueve en consecuencia.

### 2. **`Dice.js`**
Contiene la clase `Dice`, que simula el lanzamiento del dado generando un número aleatorio entre 1 y 6.

### 3. **`Player.js`**
Define la clase `Player` para los jugadores, donde cada uno tiene un nombre y una posición en el tablero. Los jugadores se mueven según el número que saquen en el dado.

### 4. **`Game.js`**
Gestiona la lógica del juego. Crea los jugadores, controla los turnos y verifica si un jugador ha ganado. El juego se desarrolla por turnos hasta que un jugador llegue a la casilla 100.

### 5. **`index.js`**
Es el archivo principal que se encarga de iniciar el juego cuando el jugador hace clic en "Start Game".

### 6. **`index.html`**
Contiene la estructura básica del juego en la interfaz de usuario, incluyendo el botón para comenzar el juego y el área para mostrar el tablero y los jugadores.

## Cómo Jugar

1. Haz clic en "Start Game" para comenzar.
2. Los resultados se muestran en la consola del navegador
3. Si caen en una serpiente, retroceden; si caen en una escalera, avanzan.
4. El primer jugador en llegar a la casilla 100 gana.

## Requisitos

- Un navegador web moderno con soporte para módulos JavaScript.

