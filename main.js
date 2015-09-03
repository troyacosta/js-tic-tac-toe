var prompt = require('prompt-sync').prompt;
var player1 = null;
var player2 = null;
var move = null;
var gameOver = false;
var board = [
				[' ',' ',' '],
				[' ',' ',' '],
				[' ',' ',' ']
			]; 
var gameBoard = function() {
		console.log(
	'   1   '+'   2   '+'   3   \n'+
	'~~~~~~~~~~~~~~~~~~~~~~~\n'+
	'1| '+board[0][0]+'   |    '+board[0][1]+'  |   '+board[0][2]+'   |\n'+
	'~~~~~~~~~~~~~~~~~~~~~~~\n'+
	'2| '+board[1][0]+'   |    '+board[1][1]+'  |   '+board[1][2]+'   |\n'+
	'~~~~~~~~~~~~~~~~~~~~~~~\n'+
	'3| '+board[2][0]+'   |    '+board[2][1]+'  |   '+board[2][2]+'   |\n');
	};

console.log('Lets play Tic Tac Toe!');
console.log('You\'re player one, what\'s your name?');
     player1 = prompt();
console.log('OK, now who is player 2?');
     player2 = prompt();
gameBoard();
while (gameOver === false) {
		console.log(player1+', it\'s your turn!');
		move = prompt().split(' ');
		var x = parseInt(move[0]) - 1;
		var y = parseInt(move[1]) - 1;
		
		board[x][y] = 'X';
		gameBoard();
		gameOver = true;
}

	





