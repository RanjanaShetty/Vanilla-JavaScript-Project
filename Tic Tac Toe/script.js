let currentPlayer='X';
let board=[
    ['','',''],
    ['','',''],
    ['','',''],
];
function placeMark(row,col){
    if(!board[row][col]) {
        board[row][col]=currentPlayer;
        document.querySelector(`.board tr:nth-child(${row + 1}) td:nth-child(${col + 1})`).innerText = currentPlayer;
        if (checkWin()) {
            alert(currentPlayer + " wins!");
            resetBoard();
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!board[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    document.querySelectorAll('.board td').forEach(cell => cell.innerText = '');
}