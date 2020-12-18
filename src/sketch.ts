//---- GLOBAL VARIABLES ----//
let game: TheGame;

interface Sounds {
    key: p5.SundFile;
    ouch: p5.SundFile;
    life: p5.SundFile;
    backgroundMusic: p5.SoundFile;
    star: p5.SoundFile;
}
let sounds: Sounds;
/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
    sounds={
        key: loadSound(''),
        ouch: loadSound(''),
        life: loadSound(''),
        backgroundMusic: loadSound(''),
        star: loadSound (''),
    }
}



/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    //noCursor();  
    game = new TheGame();

}



/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    game.update();
    game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
