//---- GLOBAL VARIABLES ----//
let game: TheGame;

let sounds: ISounds;

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
        backgroundMusic: loadSound('../assets/music/ouch.mp3'),
        // key: loadSound('../assets/music/background.mp3'),
        // ouch: loadSound('../assets/music/background.mp3'),
        // life: loadSound('../assets/music/background.mp3'),
        // starr: loadSound ('../assets/music/background.mp3'),
    } as ISounds
    
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

function mousePressed() {
    sounds.backgroundMusic.play()
    console.log('hello')
}