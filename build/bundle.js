"use strict";
let game;
function preload() {
    const imgLogo = loadImage('./assets/logo-fs.png');
    const poppinsBold = loadFont('./font/poppins/Poppins-Bold.ttf');
    const poppinsLight = loadFont('./font/poppins/Poppins-ExtraLight.ttf');
    const poppinsMedium = loadFont('./font/poppins/Poppins-Medium.ttf');
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
//# sourceMappingURL=bundle.js.map