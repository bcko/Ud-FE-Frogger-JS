// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// for better error handling, and performance 
"use strict"; 


// width, height, numRows, numCols refer to values from engine.js
const BOARD = {
    width : 505,
    height : 606,
    numRows : 6,
    numCols : 5,
    dx : 101,
    dy : 83,
    playerStartPosition: {
        x : 202,
        y : 404,
    },
    Boundary : { // inclusive values
        left : 0,
        right : 404,
        up : 404-83*5,
        down : 404,
    },
}
Object.seal(BOARD);


// Enemies our player must avoid
class Enemy {
    constructor() {
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images        
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
    }


    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    // Draw the enemy on the screen, required method for game
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.startingPosition = BOARD.playerStartPosition;
        this.currentPosition = this.startingPosition;
        this.pressedKey = null;
    }

    update() {
        switch(this.pressedKey) {
            case null:
                // don't do anything
                break;
            case "left":
                this.currentPosition.x -= BOARD.dx;
                break;
            case "up":
                this.currentPosition.y -= BOARD.dy;
                break;
            case "right":
                this.currentPosition.x += BOARD.dx;
                break;
            case "down":
                this.currentPosition.y += BOARD.dy;
                break;
        }
        this.pressedKey = null;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.currentPosition.x, this.currentPosition.y);
    }

    handleInput(keyInput) {
        this.pressedKey = keyInput;
    }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
