let game_over = true;

// Player Factory
const Player = (name) => {
  const moveArray = [];

  const getName = () => name;

  let winCount = 0;

  return {getName, moveArray, winCount};
};

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

  let player1 = Player('Player 1');
  let player2 = Player('Bot');

  const turn_display = document.getElementById('turn-display');
  turn_display.innerHTML = "Hit Start Game to Begin!";

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
        player.winCount += 1;
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

  const start = () => {
    const player1name = document.getElementById("player1name").value;
    const player2name = document.getElementById("player2name").value;
    if (player1name != "") { player1 = Player(player1name); }
    if (player2name != "") { player2 = Player(player2name); }
    turn_display.innerHTML = player1.getName() + "'s turn";
  }

  const reset = () => {
    turn_display.innerHTML = player1.getName() + "'s turn.\nGame Reset!"
    player1.moveArray = [];
    player2.moveArray = [];
    game_over = false;
  }

  return {player1, player2, play, tie, start, reset};
})();

// Display Controller Module
const displayController = (() => {
  const grid_array = document.querySelectorAll(".grid");

  const start_button = document.getElementById("start");
  const reset_button = document.getElementById("reset");

  const player1wins = document.getElementById("player1wins");
  const player2wins = document.getElementById("player2wins");

  grid_array.forEach((div) => {
    div.addEventListener("click", function () {
      if (game_over) return
      if (this.innerHTML != '') return

      this.innerHTML = game.play(this.getAttribute("data-index"));
      game.tie();
      if (game_over) { updateWins() };
    });
  });

  start_button.addEventListener("click", function () {
    game.start();
    updateWins();
    game_over = false;
  });

  reset_button.addEventListener("click", function () {
    game.reset();
    grid_array.forEach((div) => {
      div.innerHTML = '';
    })
  })

  const updateWins = () => {
    player1wins.innerHTML = game.player1.getName() + "'s Wins: " + game.player1.winCount;
    player2wins.innerHTML = game.player2.getName() + "'s Wins: " + game.player2.winCount;
  }
})();
