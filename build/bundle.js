"use strict";
class Player {
    constructor() {
        this.imgLeft = loadImage('assets/player-left1.png');
        this.imgRight = loadImage('assets/player-right1.png');
        this.img = this.imgLeft;
        this.position = new p5.Vector();
        this.speed = new p5.Vector();
        this.speed.x = 10;
        this.direction = 'right';
        this.characterHP = 3;
    }
    movement() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.position.x -= this.speed.x;
            this.img = this.imgLeft;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            this.img = this.imgRight;
        }
    }
    update() {
        this.movement();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 150, 150);
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
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class TheGame {
    constructor() {
        this.player = new Player();
    }
    update() {
        this.player.update();
    }
    draw() {
        clear();
        this.player.draw();
    }
    spawnNewObject() {
    }
    checkCollision() {
    }
}
//# sourceMappingURL=bundle.js.map