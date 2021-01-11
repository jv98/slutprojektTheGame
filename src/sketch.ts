//---- GLOBAL VARIABLES ----//
let game: TheGame;
let menuMode: boolean = true;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
    loadImage('./assets/logo-fs.png');
    loadImage('./assets/player-trophy.png');
    loadFont('./assets/poppins/Poppins-Bold.ttf');
    loadFont('./assets/poppins/Poppins-Medium.ttf');
    loadFont('./assets/poppins/Poppins-Light.ttf');
}



/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    let cnv = createCanvas(1250, 650);
    let x = (windowWidth - width) / 2;
    cnv.position(x);
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
