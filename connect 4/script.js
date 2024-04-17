document.addEventListener('DOMContentLoaded', () => {
    const ROWS = 6;
    const COLS = 7;
    const board = document.getElementById('board');
    const resetButton = document.getElementById('reset');
  
    let currentPlayer = 'red';
    let gameBoard = createBoard();
  
    resetButton.addEventListener('click', resetGame);
  
    function createBoard() {
      let grid = [];
      for (let i = 0; i < ROWS; i++) {
        let row = [];
        for (let j = 0; j < COLS; j++) {
          row.push('empty');
          let cell = document.createElement('div');
          cell.classList.add('cell', 'empty');
          cell.dataset.row = i;
          cell.dataset.col = j;
          cell.addEventListener('click', () => dropPiece(j));
          board.appendChild(cell);
        }
        grid.push(row);
      }
      return grid;
    }
  
    function dropPiece(col) {
      for (let i = ROWS - 1; i >= 0; i--) {
        if (gameBoard[i][col] === 'empty') {
          gameBoard[i][col] = currentPlayer;
          let cell = document.querySelector(`.cell[data-row="${i}"][data-col="${col}"]`);
          cell.classList.remove('empty');
          cell.classList.add(currentPlayer);
          if (checkWin(i, col)) {
            alert(`${currentPlayer.toUpperCase()} wins!`);
            resetGame();
          } else {
            currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
          }
          return;
        }
      }
    }
  
    function checkWin(row, col) {
      return (
        checkDirection(row, col, 1, 0) || 
        checkDirection(row, col, 0, 1) || 
        checkDirection(row, col, 1, 1) || 
        checkDirection(row, col, 1, -1)   
      );
    }
  
    function checkDirection(row, col, deltaRow, deltaCol) {
        const piece = gameBoard[row][col];
        let count = 1;
        let r = row + deltaRow;
        let c = col + deltaCol;
        while (r >= 0 && r < ROWS && c >= 0 && c < COLS && gameBoard[r][c] === piece) {
          count++;
          r += deltaRow;
          c += deltaCol;
        }
        r = row - deltaRow;
        c = col - deltaCol;
        while (r >= 0 && r < ROWS && c >= 0 && c < COLS && gameBoard[r][c] === piece) {
          count++;
          r -= deltaRow;
          c -= deltaCol;
        }
        return count >= 4;
      }
    
      function resetGame() {
        board.innerHTML = '';
        currentPlayer = 'red';
        gameBoard = createBoard();
      }
    });