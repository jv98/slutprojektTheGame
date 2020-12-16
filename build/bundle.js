"use strict";
class FallingObject {
    constructor() {
    }
    update() {
    }
    draw() {
    }
    falling() {
    }
    getPoints() {
    }
    random() {
    }
    loop() {
    }
}
class BadThing {
    constructor() {
        this.img = p5.Image;
        this.size = 10;
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width);
        this.position = new p5.Vector(this.startRandom, 0);
        this.speed = 5;
    }
    update() {
        this.falling();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
                this.position.y = -this.size / 2;
                this.position.x = random(0, width);
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
let game;
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    game = new TheGame();
}
function draw() {
    background('blue');
    fill('green');
    stroke('white');
    strokeWeight(10);
    circle(width * .5, height * .5, width * 0.2);
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class Star {
    constructor() {
        this.img = p5.Image;
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = new p5.Vector(this.startRandom, 0);
        this.speed = 4;
    }
    update() {
        this.falling();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
                this.position.y = this.size / 2;
                this.position.x = random(0, width);
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class TheGame {
    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
    }
    update() {
        this.star.update();
        this.badthing.update();
    }
    draw() {
        this.star.draw();
        this.badthing.draw();
    }
    spawnNewObject() {
    }
    checkCollision() {
    }
}
//# sourceMappingURL=bundle.js.map