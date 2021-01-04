import p5 from "p5";

class StartMenu {

  public imgLogo: p5.Image;
  public menuMode: boolean = true;
  public poppinsBold: p5.Font;
  public poppinsLight: p5.Font;

  constructor(menuMode: boolean, imgLogo: p5.Image, poppinsBold: p5.Font, poppinsLight: p5.Font) {
    this.menuMode = menuMode;
    this.imgLogo = loadImage('./assets/logo-fs.png');
    this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
    this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');;
  }

  draw() {
      // print(mouseX, mouseY);
      background(0);
      imageMode(CENTER)
      image(this.imgLogo, 1250 / 2, 130, 350, 170)
  
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
  
      // BACKSTORY TITLE
      textFont(this.poppinsBold);
      textSize(18);
      textAlign(CENTER);
      fill(255);
      text('B A C K S T O R Y', 1250 / 2, 365);
  
      // BACKSTORY TEXT
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
}