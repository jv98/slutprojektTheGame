"use strict";
class GameStatusbar {
    constructor() {
        this.pointsCounter = 0;
        this.characterHP = 3;
        this.score = 0;
        this.img = loadImage('assets/muteIcon.png');
        this.starImg = loadImage('assets/starPoints.png');
        this.muteIcon = loadImage('assets/muteIcon.png');
        this.position = new p5.Vector();
    }
    update() {
    }
    draw() {
        image(this.img, this.position.x, this.position.y);
        image(this.starImg, this.position.x, this.position.y);
        image(this.muteIcon, this.position.x, this.position.y);
        fill('black');
        textFont('Poppins');
        text("HP :" + this.score, 600, 600);
        textSize(25);
        text("Restart Game", 1000, 600);
    }
    togglePlaying() {
    }
    restartGame() {
    }
    pointCounter() {
    }
    characterHPs() {
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
        this.gameStatusbar = new GameStatusbar();
    }
    update() {
        this.gameStatusbar.update();
    }
    draw() {
        clear();
        this.gameStatusbar.draw();
    }
    spawnNewObject() {
    }
    checkCollision() {
    }
}
//# sourceMappingURL=bundle.js.map