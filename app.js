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

      this.innerHTML = "X";
    });
  });

  return {
    
  };
})();

// Game Module
const game = (() => {
  const player1 = Player('Brian');
  const player2 = Player('Meg');

  return {player1, player2};
})();

console.log(game.player1.getName());
console.log(game.player2.getName());