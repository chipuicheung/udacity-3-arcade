// Enemies our player must avoid
// construct with given x, y coordinates and speed to move bugs at different rates
class Enemy {
  constructor(x,y, speed) {
    this.x = x;
    this.y = y + 55;
    this.speed = speed
    this.sprite = 'images/enemy-bug.png';
    this.bugX = 101;
  }
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
  update(dt) {
    if (this.x < this.bugX * 6) {
      this.x += this.speed * dt;
    } else {
      this.x = -this.bugX;
    }
   }
// Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
class Player {
  constructor() {
    this.horz = 101; // x
    this.vert = 83; // y
    this.startX = this.horz * 2;
    this.startY = (this.vert * 4) + 55;
    this.sprite = 'images/char-princess-girl.png';
    this.x = this.startX;
    this.y = this.startY;
    this.gameOver = false;
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
    if (this.x < this.horz * 4) {
      if (pressKey === 'right') {
        this.x += this.horz;
      }
    }
    if (this.y > 0) {
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
  reset() {
    this.x = this.startX;
    this.y = this.startY;
    this.gameOver = false;
  }
 // When player encounters enemy, restart game.
 // When player reaches water, win!
  update() {
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.bugX/2 > this.x && enemy.x < this.x + this.horz/2)) {
        this.reset();
      }
    }
    if (this.y < 0) {
      win();
      this.gameOver = true;
    }
  }
}

// Place all enemy objects in an array called allEnemies
const bug1 = new Enemy(-101, 0, 100);
const bug2 = new Enemy(-202, 83, 80);
const bug3 = new Enemy(-303, (83*2), 200);

const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);
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
