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
class Badthings extends FallingObject {
}
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}
function draw() {
    background('blue');
    fill('green');
    stroke('white');
    strokeWeight(10);
    circle(width * .5, height * .5, width * 0.2);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class Star extends FallingObject {
    constructor() {
        super();
    }
    update() {
    }
    draw() {
    }
    falling() {
    }
    pointsIncrease(points) {
        if (this.posX >= characterPosition) {
            points++;
        }
        else if (this.posX >= gamePlanPosition) {
        }
    }
}
//# sourceMappingURL=bundle.js.map