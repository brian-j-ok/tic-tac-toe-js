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

const player1 = Player('brian');
console.log(player1.getName());