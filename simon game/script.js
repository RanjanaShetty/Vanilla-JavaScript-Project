document.addEventListener('DOMContentLoaded', () => {
    let order = [];
    let playerOrder = [];
    let flash;
    let turn;
    let good;
    let compTurn;
    let intervalId;
    let strict = false;
    let noise = true;
    let on = false;
    let win;

    const turnCounter = document.querySelector("#turn");
    const topLeft = document.querySelector("#topleft");
    const topRight = document.querySelector("#topright");
    const bottomLeft = document.querySelector("#bottomleft");
    const bottomRight = document.querySelector("#bottomright");
    const strictButton = document.querySelector("#strict");
    const onButton = document.querySelector("#on");
    const startButton = document.querySelector("#start");

    const play = () => {
      win = false;
      order = [];
      playerOrder = [];
      flash = 0;
      turn = 1;
      turnCounter.innerHTML = 1;
      good = true;
      for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
      }
      compTurn = true;

      intervalId = setInterval(gameTurn, 800);
    }

    const gameTurn = () => {
      on = false;

      if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
      }

      if (compTurn) {
        clearColor();
        setTimeout(() => {
          if (order[flash] == 1) one();
          if (order[flash] == 2) two();
          if (order[flash] == 3) three();
          if (order[flash] == 4) four();
          flash++;
        }, 200);
      }
    }

    const one = () => {
      playSound(1);
      topLeft.style.backgroundColor = "lightgreen";
    }

    const two = () => {
      playSound(2);
      topRight.style.backgroundColor = "tomato";
    }

    const three = () => {
      playSound(3);
      bottomLeft.style.backgroundColor = "yellow";
    }

    const four = () => {
      playSound(4);
      bottomRight.style.backgroundColor = "lightskyblue";
    }

    const playSound = (sound) => {
      let audio = document.getElementById("clip" + sound);
      if (audio) {
        audio.play();
      }
    }

    const clearColor = () => {
      topLeft.style.backgroundColor = "darkgreen";
      topRight.style.backgroundColor = "darkred";
      bottomLeft.style.backgroundColor = "goldenrod";
      bottomRight.style.backgroundColor = "darkblue";
    }

    const flashColor = () => {
      topLeft.style.backgroundColor = "lightgreen";
      topRight.style.backgroundColor = "tomato";
      bottomLeft.style.backgroundColor = "yellow";
      bottomRight.style.backgroundColor = "lightskyblue";
    }

    const check = () => {
      if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

      if (!good) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() => {
          turnCounter.innerHTML = turn;
          clearColor();

          if (strict) {
            play();
          } else {
            compTurn = true;
            flash = 0;
            playerOrder = [];
            good = true;
            intervalId = setInterval(gameTurn, 800);
          }
        }, 800);

        noise = false;
      }

      if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
      }

      if (turn > 20) {
        winGame();
      }
    }

    const winGame = () => {
      flashColor();
      turnCounter.innerHTML = "WIN!";
      on = false;
      win = true;
    }

    topLeft.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })

    topRight.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })

    bottomLeft.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })

    bottomRight.addEventListener('click', (event) => {
      if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
          setTimeout(() => {
            clearColor();
          }, 300);
        }
      }
    })

    if (strictButton) {
        strictButton.addEventListener('click', (event) => {
            strict = strictButton.checked;
        });
    } else {
        console.error("Element with id 'strict' not found.");
    }

    if (onButton) {
        onButton.addEventListener('click', (event) => {
          on = onButton.checked;
          if (on) {
            turnCounter.innerHTML = "-";
          } else {
            turnCounter.innerHTML = "";
            clearColor();
            clearInterval(intervalId);
          }
        });
    } else {
        console.error("Element with id 'on' not found.");
    }

    if (startButton) {
        startButton.addEventListener('click', (event) => {
          if (on || win) {
            play();
          }
        });
    } else {
        console.error("Element with id 'start' not found.");
    }
});
