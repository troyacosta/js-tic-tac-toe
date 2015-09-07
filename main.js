var prompt = require('prompt-sync').prompt;
var player1 = null;
var player2 = null;
var move = null;
var playAgain = 'yes';
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
        '1| ' + board[0][0] + '   |    ' + board[1][0] + '  |   ' + board[2][0] + '   |\n' +
        '~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '2| ' + board[0][1] + '   |    ' + board[1][1] + '  |   ' + board[2][1] + '   |\n' +
        '~~~~~~~~~~~~~~~~~~~~~~~\n' +
        '3| ' + board[0][2] + '   |    ' + board[1][2] + '  |   ' + board[2][2] + '   |\n');
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
var finished = function() {
    throw new message('Thanks for playing!');
}
var gameOver = function() {
    console.log('Would you like to play again? Yes or no?');
    playAgain = prompt().toLowerCase();
    if (playAgain === 'yes') {
        gameStart();
    } else {
        finished();
    }
};
var userOne = function() {
    console.log(player1 + ', you are X\'s and it\'s your turn');
    move = prompt().split(' ');
    x = parseInt(move[0]);
    y = parseInt(move[1]);
    while (x > 3 || x < 1 || y > 3 || y < 1) {
        console.log('You must enter numbers between 1 and 3 that are seperated by a space.');
        userOne();
    }
    while (board[x - 1][y - 1] === ('X' || 'O')) {
        console.log('That space is already taken, please choose again.');
        userOne();
    }
    board[x - 1][y - 1] = 'X';
    gameBoard();
    var rowOne = [board[0][0], board[1][0], board[2][0]];
    var rowTwo = [board[0][1], board[1][1], board[2][1]];
    var rowThree = [board[0][2], board[1][2], board[2][2]];
    var colOne = [board[0][0], board[0][1], board[0][2]];
    var colTwo = [board[1][0], board[1][1], board[1][2]];
    var colThree = [board[2][0], board[2][1], board[2][2]];
    var diagOne = [board[0][0], board[1][1], board[2][2]];
    var diagTwo = [board[2][0], board[1][1], board[0][2]];
    if (rowOne.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver()
    } else if (rowTwo.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    } else if (rowThree.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    } else if (colOne.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    } else if (colTwo.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    } else if (colThree.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    } else if (diagOne.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    } else if (diagTwo.toString() === 'X,X,X') {
        console.log('Congrats ' + player1 + ', you win!');
        gameOver();
    }
    turn = turn - 1;
    if (turn === 0) {
        console.log('It\'s a tie.');
        gameOver();
    }
    userTwo();
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
    var rowOne = [board[0][0], board[1][0], board[2][0]];
    var rowTwo = [board[0][1], board[1][1], board[2][1]];
    var rowThree = [board[0][2], board[1][2], board[2][2]];
    var colOne = [board[0][0], board[0][1], board[0][2]];
    var colTwo = [board[1][0], board[1][1], board[1][2]];
    var colThree = [board[2][0], board[2][1], board[2][2]];
    var diagOne = [board[0][0], board[1][1], board[2][2]];
    var diagTwo = [board[2][0], board[1][1], board[0][2]];
    if (rowOne.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (rowTwo.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (rowThree.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (colOne.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (colTwo.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (colThree.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (diagOne.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    } else if (diagTwo.toString() === 'O,O,O') {
        console.log('Congrats ' + player2 + ', you win!');
        gameOver()
    }
    userOne();
};
gameStart();
