// Enemies our player must avoid
class Enemy {
  constructor() {    
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
  }
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//   update() {
// // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
//   }
// Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
class Player {
  constructor() {
    this.x = 200;
    this.y = 404;
    this.startX = this.x;
    this.startY = this.y;
    this.horz = 101; // x
    this.vert = 83; // y  
    this.sprite = 'images/char-princess-girl.png';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(allowedKeys) {
    let pressKey = allowedKeys;
    if (this.x > 0) {
      if (pressKey === 'left') {
        this.x -= this.horz;
      }
    }
    if (this.x < this.horz * 3) {
      if (pressKey === 'right') {
        this.x += this.horz;
      }
    }
    if (this.y > 0){
      if (pressKey === 'up') {
        this.y -= this.vert;
      }
    } 
    if (this.y < this.vert * 4) { 
      if (pressKey === 'down') {
        this.y += this.vert;
      }
    }
  }
}
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
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
