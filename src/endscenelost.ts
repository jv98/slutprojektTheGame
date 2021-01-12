class EndSceneLost {
  private imgLogo: p5.Image;
  private poppinsBold: p5.Font;
  private poppinsMedium: p5.Font;
  private poppinsLight: p5.Font;

  constructor() {
      this.imgLogo = loadImage('./assets/logo-fs.png');
      this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
      this.poppinsMedium = loadFont('./assets/poppins/Poppins-Medium.ttf');
      this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
  }

  draw() {
    push();
    background(0);
    imageMode(CENTER)
    image(this.imgLogo, 1250 / 2, 110, 350, 170)

    textFont(this.poppinsBold);
    fill(255);

    textSize(50);
    textAlign(CENTER)
    text('YOU RAN OUT OF LIVES!', 1250 / 2, 300);
    
    textSize(26);
    textFont(this.poppinsMedium);
    text('Willow still needs your help', 1250 / 2, 350);
    textFont(this.poppinsLight)

    textSize(18);
    text('Only YOU can help her get her teddy bear back!', 1250 / 2, 400);
    textFont(this.poppinsBold)

    textSize(22);
    text('WANT TO TRY AGAIN?', 1250 / 2, 475);

    textFont(this.poppinsLight)
    text('Hit ENTER', 1250 / 2, 510);
    pop();
  }  
}