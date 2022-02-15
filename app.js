let game_over = false;

// Player Factory
const Player = (name) => {
  const moveArray = [];

  const getName = () => name;

  return {getName, moveArray};
};

// Display Controller Module
const displayController = (() => {
  const grid_array = document.querySelectorAll(".grid");

  grid_array.forEach((div) => {
    div.addEventListener("click", function () {
      if (game_over) return
      if (this.innerHTML != '') return

      this.innerHTML = game.play(this.getAttribute("data-index"));
      game.tie();
    });
  });

  return {
    
  };
})();

// Game Module
const game = (() => {
  const winning_moves = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  const player1 = Player('Brian');
  const player2 = Player('Meg');

  const turn_display = document.getElementById('turn-display');
  turn_display.innerHTML = player1.getName() + "'s turn";

  const play = (index) => {
    if (turn_display.innerHTML.split("'")[0] == player1.getName()) {
      player1.moveArray.push(index);
      turn_display.innerHTML = player2.getName() + "'s turn";
      if (victory(player1)) {turn_display.innerHTML = player1.getName() + " Won!!!"};
      return "X"
    } else {
      player2.moveArray.push(index);
      turn_display.innerHTML = player1.getName() + "'s turn";
      if (victory(player2)) {turn_display.innerHTML = player2.getName() + " Won!!!"};
      return "O"
    }
  };

  const victory = (player) => {
    let won = false;
    for (let combo of winning_moves) {
      won = combo.every(move => {
        return player.moveArray.includes(move);
      });
      if (won) {
        game_over = true;
        break;
      };
    }
    return won;
  }

  const tie = () => {
    let play_count = player1.moveArray.length + player2.moveArray.length;
    if (play_count == 9) {
      game_over = true;
      turn_display.innerHTML = "Tie!";
    }
  }

  return {player1, player2, play, tie};
})();
