class Rover {
    constructor(x, y, dir) {
        this.N = 1;
        this.E = 2;
        this.S = 3;
        this.W = 4;
        this.x = x || 0;
        this.y = y || 0;
        this.dir = dir || 'N';
        this.direction = this.N;
    }
    
    go(commands) {
        this.setPos();
        const commandsArr = commands.split('');
        for (let i = 0; i < commandsArr.length; i++) {
            if(commandsArr[i] === 'L'){
                this.left();
            } else if(commandsArr[i] === 'R') {
                this.right();
            } else if(commandsArr[i] === 'M') {
                this.move();
            }
        }
    }

    setPos() {
        if (this.dir == 'N') {
            this.direction = 1;
        } else if (this.dir == 'E') {
            this.direction = 2;
        } else if (this.dir == 'S') {
            this.direction = 3;
        } else if (this.dir == 'W') {
            this.direction = 4;
        }
    }

    move() {
        if (this.direction == this.N) {
            this.y++;
        } else if (this.direction == this.E) {
            this.x++;
        } else if (this.direction == this.S) {
            this.y--;
        } else if (this.direction == this.W) {
            this.x--;
        }
    }

    left() {
        this.direction = (this.direction - 1) < this.N ? this.W : this.direction - 1;
    }

    right() {
        this.direction = (this.direction + 1) > this.W ? this.N : this.direction + 1;
    }
}

let a = new Rover(1, 2, 'N');
a.go('LMLMLMLMM');
let b = new Rover(3, 3, 'E');
b.go('MMRMMRMRRM');
console.log(a.x, a.y, a.dir);
console.log(b.x, b.y, b.dir);
