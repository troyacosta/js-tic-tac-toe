var prompt = require('prompt-sync').prompt;
var player1 = null;
var player2 = null;
var move = null;
var gameOver = false;
var x = null;
var y = null;
var turn = 5;
var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
var boardReset = function() {
	board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
};
var gameBoard = function() {
    console.log(
        '   1   ' + '   2   ' + '   3   \n' +
        '~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '1| ' + board[0][0] + '   |    ' + board[0][1] + '  |   ' + board[0][2] + '   |\n' +
        '~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '2| ' + board[1][0] + '   |    ' + board[1][1] + '  |   ' + board[1][2] + '   |\n' +
        '~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '3| ' + board[2][0] + '   |    ' + board[2][1] + '  |   ' + board[2][2] + '   |\n');
};
var userTwo = function() {
    console.log(player2 + ', you are O\'s and it\'s your turn');
    move = prompt().split(' ');
    x = parseInt(move[0]);
    y = parseInt(move[1]);
    while (x > 3 || x < 1 || y > 3 || y < 1) {
        console.log('You must enter numbers between 1 and 3 that are seperated by a space.');
        userTwo();
    };
    while (board[x - 1][y - 1] === ('X' || 'O')) {
        console.log('That space is already taken, please choose again.');
        userTwo();
    };
    board[x - 1][y - 1] = 'O';
    gameBoard();
    var rowOne = [board[0][0], board[0][1], board[0][2]];
    var rowTwo = [board[1][0], board[1][1], board[1][2]];
    var rowThree = [board[2][0], board[2][1], board[2][2]];
    var colOne = [board[0][0], board[1][0], board[2][0]];
    var colTwo = [board[0][1], board[1][1], board[2][1]];
    var colThree = [board[0][2], board[1][2], board[2][2]];
    var diagOne = [board[0][0], board[1][1], board[2][2]];
    var diagTwo = [board[0][2], board[1][1], board[2][0]];
    if (rowOne.toString() === 'O,O,O') {
        gameOver()
    } else if (rowTwo.toString() === 'O,O,O') {
        gameOver()
    } else if (rowThree.toString() === 'O,O,O') {
        gameOver()
    } else if (colOne.toString() === 'O,O,O') {
        gameOver()
    } else if (colTwo.toString() === 'O,O,O') {
        gameOver()
    } else if (colThree.toString() === 'O,O,O') {
        gameOver()
    } else if (diagOne.toString() === 'O,O,O') {
        gameOver()
    } else if (diagTwo.toString() === 'O,O,O') {
        gameOver()
    }
    userOne();
};
var userOne = function() {
    console.log(player1 + ', you are X\'s and it\'s your turn');
    move = prompt().split(' ');
    x = parseInt(move[0]);
    y = parseInt(move[1]);
    while (x > 3 || x < 1 || y > 3 || y < 1) {
        console.log('You must enter numbers between 1 and 3 that are seperated by a space.');
        userOne();
    };
    while (board[x - 1][y - 1] === ('X' || 'O')) {
        console.log('That space is already taken, please choose again.');
        userOne();
    };
    board[x - 1][y - 1] = 'X';
    gameBoard();
    var rowOne = [board[0][0], board[0][1], board[0][2]];
    var rowTwo = [board[1][0], board[1][1], board[1][2]];
    var rowThree = [board[2][0], board[2][1], board[2][2]];
    var colOne = [board[0][0], board[1][0], board[2][0]];
    var colTwo = [board[0][1], board[1][1], board[2][1]];
    var colThree = [board[0][2], board[1][2], board[2][2]];
    var diagOne = [board[0][0], board[1][1], board[2][2]];
    var diagTwo = [board[0][2], board[1][1], board[2][0]];
    if (rowOne.toString() === 'X,X,X') {
        gameOver()
    } else if (rowTwo.toString() === 'X,X,X') {
        gameOver();
    } else if (rowThree.toString() === 'X,X,X') {
        gameOver();
    } else if (colOne.toString() === 'X,X,X') {
        gameOver();
    } else if (colTwo.toString() === 'X,X,X') {
        gameOver();
    } else if (colThree.toString() === 'X,X,X') {
        gameOver();
    } else if (diagOne.toString() === 'X,X,X') {
        gameOver();
    } else if (diagTwo.toString() === 'X,X,X') {
        gameOver();
    };
    turn = turn - 1;
    if (turn === 0) {
        console.log('It\'s a tie.');
        gameStart();
    }
    userTwo();
};
var gameOver = function() {
    console.log('You win!')
    gameStart();
};
var gameStart = function() {
	boardReset();
    console.log('Lets play Tic Tac Toe!');
    console.log('You\'re player one, what\'s your name?');
    player1 = prompt();
    console.log('OK, now who is player 2?');
    player2 = prompt();
    gameBoard();
    userOne();
};
gameStart();
