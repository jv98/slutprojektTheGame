import p5 from "p5";

class StartMenu {

  private imgLogo: p5.Image;
  private poppinsBold: p5.Font;
  private poppinsLight: p5.Font;

  constructor() { // ska ta in game: IGameState
    this.imgLogo = loadImage('assets/logo-fs.png');
    this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
    this.poppinsLight = loadFont('./assets/poppins/Poppins-ExtraLight.ttf');
  }

  update() {

  }

  draw() {
    background(0);
    imageMode(CENTER)
    image(this.imgLogo, 1250 / 2, 130, 300, 170)

    // INSTRUCTIONS
    textFont(this.poppinsBold);
    textSize(18);
    textAlign(CENTER);
    fill(255);
    text('I N S T R U C T I O N S', 1250 / 2, 250);

    //MOVE LEFT OR RIGHT
    textFont(this.poppinsLight);
    textSize(18);
    textAlign(CENTER);
    fill(255);
    textLeading(25);
    text('Move Left: Press A or <-\nMove Right: Press D or ->', 1250 / 2, 280);

    // BACKSTORY
    textFont(this.poppinsBold);
    textSize(18);
    textAlign(CENTER);
    fill(255);
    text('B A C K S T O R Y', 1250 / 2, 365);

    // LONG BACKSTORY TEXT
    textFont(this.poppinsLight);
    textSize(18);
    textAlign(CENTER);
    fill(255);
    text('Little Willow has just lost her most priced possession, her favorite teddy bear.\nTo get the bear back, she has to catch the falling stars to make her wish come true.\n You have to help her catch as many stars as possible,\nbut look out for the nails!', 1250 / 2, 395);

    // READY TO PLAY
    textFont(this.poppinsBold);
    textSize(22);
    textAlign(CENTER);
    fill(255);
    text('READY TO PLAY?', 1250 / 2, 515);

    // HIT ENTER TO START
    textFont(this.poppinsLight);
    textSize(22);
    textAlign(CENTER);
    fill(255);
    text(
      'Hit ENTER to start!',
      1250 / 2,
      550
    );
  }

  startGame() { //ska ta in event

  }
}