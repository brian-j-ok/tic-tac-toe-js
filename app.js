// Gameboard Module
const gameBoard = (() => {
  const board_array = [];

  return {
    board_array,
  };
})();

// Player Factory
const Player = (name) => {
  const getName = () => name;

  return {getName};
};

// Display Controller Module
const displayController = (() => {
  const grid_array = document.querySelectorAll(".grid");

  grid_array.forEach((div) => {
    div.addEventListener("click", function () {
      if (this.innerHTML != '') return

      this.innerHTML = game.play();
    });
  });

  return {
    
  };
})();

// Game Module
const game = (() => {
  const player1 = Player('Brian');
  const player2 = Player('Meg');

  const turn_display = document.getElementById('turn-display');
  turn_display.innerHTML = player1.getName();

  const play = () => {
    if (turn_display.innerHTML == player1.getName()) {
      turn_display.innerHTML = player2.getName();
      return "X"
    } else {
      turn_display.innerHTML = player1.getName();
      return "O"
    }
  };

  return {player1, player2, play};
})();

console.log(game.player1.getName());
console.log(game.player2.getName());