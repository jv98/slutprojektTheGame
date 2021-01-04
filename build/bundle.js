"use strict";
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
//# sourceMappingURL=bundle.js.map