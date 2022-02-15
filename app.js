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

// Display Controlller Module
const displayController = (() => {
  const gameboard = document.getElementById('gameboard');

  return {

  };
}) ();