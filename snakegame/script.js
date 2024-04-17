document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
  
    const scale = 10;
    const rows = canvas.height / scale;
    const cols = canvas.width / scale;
  
    let snake;
    let fruit;
  
    (function setup() {
      snake = new Snake();
      fruit = new Fruit();
      fruit.pickLocation();
  
      window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
  
        if (snake.eat(fruit)) {
          fruit.pickLocation();
        }
  
        snake.checkCollision();
        document.querySelector('.score').innerText = snake.total;
      }, 100);
    }());
  
    window.addEventListener('keydown', (event) => {
      const direction = event.key.replace('Arrow', '');
      snake.changeDirection(direction);
    });
  
    function Snake() {
      this.x = 0;
      this.y = 0;
      this.xSpeed = scale * 1;
      this.ySpeed = 0;
      this.total = 0;
      this.tail = [];
  
      this.draw = () => {
        ctx.fillStyle = '#fff';
  
        for (let i = 0; i < this.tail.length; i++) {
          ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
  
        ctx.fillRect(this.x, this.y, scale, scale);
      };
  
      this.update = () => {
        for (let i = 0; i < this.tail.length - 1; i++) {
          this.tail[i] = this.tail[i + 1];
        }
  
        this.tail[this.total - 1] = { x: this.x, y: this.y };
  
        this.x += this.xSpeed;
        this.y += this.ySpeed;
  
        if (this.x >= canvas.width) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = canvas.width - scale;
        }
  
        if (this.y >= canvas.height) {
          this.y = 0;
        } else if (this.y < 0) {
          this.y = canvas.height - scale;
        }
      };
  
      this.changeDirection = (direction) => {
        switch (direction) {
          case 'Up':
            if (this.ySpeed !== scale * 1) {
              this.xSpeed = 0;
              this.ySpeed = -scale * 1;
            }
            break;
          case 'Down':
            if (this.ySpeed !== -scale * 1) {
              this.xSpeed = 0;
              this.ySpeed = scale * 1;
            }
            break;
          case 'Left':
            if (this.xSpeed !== scale * 1) {
              this.xSpeed = -scale * 1;
              this.ySpeed = 0;
            }
            break;
          case 'Right':
            if (this.xSpeed !== -scale * 1) {
              this.xSpeed = scale * 1;
              this.ySpeed = 0;
            }
            break;
          default:
            break;
        }
      };
  
      this.eat = (fruit) => {
        if (this.x === fruit.x && this.y === fruit.y) {
          this.total++;
          return true;
        }
        return false;
      };
  
      this.checkCollision = () => {
        for (let i = 0; i < this.tail.length; i++) {
          if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
            this.total = 0;
            this.tail = [];
            document.querySelector('.score').innerText = this.total;
            alert('Game Over! Your score: ' + this.total);
          }
        }
      };
    }
  
    function Fruit() {
      this.x;
      this.y;
  
      this.pickLocation = () => {
        const cols = Math.floor(canvas.width / scale);
        const rows = Math.floor(canvas.height / scale);
        this.x = (Math.floor(Math.random() * cols)) * scale;
        this.y = (Math.floor(Math.random() * rows)) * scale;
      };
  
      this.draw = () => {
        ctx.fillStyle = '#f00';
        ctx.fillRect(this.x, this.y, scale, scale);
      };
    }
  });
  