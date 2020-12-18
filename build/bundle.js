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
class BadThing extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 10;
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
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class ExtraLife extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/1-up.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 4;
    }
    update() {
        this.falling();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 80, 60);
    }
    falling() {
        if (this.position.x <= width) {
            if (this.position.x > width - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class GameStatusbar {
    constructor() {
        this.pointsCounter = 0;
        this.characterHP = 3;
        this.score = 0;
        this.img = loadImage('assets/muteIcon.png');
        this.starImg = loadImage('assets/starPoints.png');
        this.noVolume = loadImage('assets/noVolume.png');
        this.position = new p5.Vector();
        this.position.x = 100;
    }
    update() {
    }
    draw() {
        image(this.img, this.position.x, this.position.y + 10, 100, 100);
        image(this.starImg, this.position.x, this.position.y);
        image(this.noVolume, this.position.x, this.position.y);
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
class Player {
    constructor() {
        this.playerImgLeft = [];
        this.playerImgRight = [];
        this.setupImages();
        this.img = this.playerImgLeft[0];
        this.position = new p5.Vector();
        this.position.x = 500;
        this.speed = new p5.Vector();
        this.speed.x = 7;
        this.frameCounter = 1;
        this.characterHP = 3;
        this.hitBoxBucketPosition = this.position.x + 42;
        this.hitBoxPlayerPosition = this.position.x + 78;
    }
    setupImages() {
        const playerImgCount = 6;
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgLeft.push(loadImage('assets/player-left' + i + '.png'));
        }
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgRight.push(loadImage('assets/player-right' + i + '.png'));
        }
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
    * / ;
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
class Star extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 2;
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
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class TheGame {
    constructor() {
        this.player = new Player();
        this.gameStatusbar = new GameStatusbar();
    }
    update() {
        this.gameStatusbar.update();
    }
    update() {
        this.player.update();
        this.star.update();
        this.badthing.update();
        this.extraLife.update();
        this.checkCollision();
        this.spawnNewObject();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update();
        }
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
this.player.draw();
for (const fallingObj of this.fallingObjects) {
    fallingObj.draw();
}
spawnNewObject();
{
    if (this.spawnTimer > 2500) {
        this.spawnTimer = 0;
        this.fallingObjects.push(new Star());
        this.fallingObjects.push(new BadThing());
        this.fallingObjects.push(new ExtraLife());
    }
    this.spawnTimer += deltaTime;
}
checkCollision();
{
    for (const fallingObj of this.fallingObjects) {
        let i = this.fallingObjects.indexOf(fallingObj);
        if (fallingObj instanceof Star) {
            let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y);
            if (distance < fallingObj.size + this.extraLife.size) {
                this.fallingObjects.splice(i, 1);
                console.log("Poäng");
            }
            else if (fallingObj.position.y > windowHeight) {
                this.fallingObjects.splice(i, 1);
            }
        }
        if (fallingObj instanceof BadThing) {
            let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y);
            if (distance < fallingObj.size + this.extraLife.size) {
                this.fallingObjects.splice(i, 1);
                console.log("Skada");
            }
            else if (fallingObj.position.y > windowHeight) {
                this.fallingObjects.splice(i, 1);
            }
        }
        if (fallingObj instanceof ExtraLife) {
            let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y);
            if (distance < fallingObj.size + this.extraLife.size) {
                this.fallingObjects.splice(i, 1);
                console.log("Skada");
            }
            else if (fallingObj.position.y > windowHeight) {
                this.fallingObjects.splice(i, 1);
            }
        }
    }
}
//# sourceMappingURL=bundle.js.map