class EndSceneLost {

  draw() {
    push();
    background(0);
    imageMode(CENTER)
    image(images.logo, 1250 / 2, 110, 350, 170)

    textFont(fonts.poppinsBold);
    fill(255);

    textSize(50);
    textAlign(CENTER)
    text('YOU RAN OUT OF LIVES!', 1250 / 2, 300);
    
    textSize(26);
    textFont(fonts.poppinsMedium);
    text('Willow still needs your help', 1250 / 2, 350);
    textFont(fonts.poppinsLight)

    textSize(18);
    text('Only YOU can help her get her teddy bear back!', 1250 / 2, 400);
    textFont(fonts.poppinsBold)

    textSize(22);
    text('WANT TO TRY AGAIN?', 1250 / 2, 475);

    textFont(fonts.poppinsLight)
    text('Hit ENTER', 1250 / 2, 510);
    pop();
  }  
}