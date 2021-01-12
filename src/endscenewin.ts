class EndSceneWin {
  
  draw() {
    push();
    background(0);
    imageMode(CENTER)
    image(images.logo, 1250 / 2, 110, 350, 170)
    image(images.playerTrophy, 1050, 400, 250, 250)

    textFont(fonts.poppinsBold);
    fill(255);

    textSize(50);
    textAlign(CENTER)
    text('C O N G R A T U L A T I O N S !', 1250 / 2, 300);
    
    textSize(26);
    textFont(fonts.poppinsMedium);
    text('Willow is incredibly thankful for your help', 1250 / 2, 350);
    textFont(fonts.poppinsLight)

    textSize(18);
    text('Thanks to YOU she was able to get her teddy bear back', 1250 / 2, 400);
    textFont(fonts.poppinsBold)

    textSize(22);
    text('WANT TO PLAY AGAIN?', 1250 / 2, 475);

    textFont(fonts.poppinsLight)
    text('Hit ENTER', 1250 / 2, 510);
    pop();
  }  
}
