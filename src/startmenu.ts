class StartMenu {

  draw() {
    push()
      background(0);
      imageMode(CENTER)
      image(images.logo, 1250 / 2, 130, 350, 170)
  
      // INSTRUCTIONS
      textFont(fonts.poppinsBold);
      textSize(18);
      textAlign(CENTER);
      fill(255);
      text('I N S T R U C T I O N S', 1250 / 2, 250);
  
      //MOVE LEFT OR RIGHT
      textFont(fonts.poppinsLight);
      textSize(18);
      textAlign(CENTER);
      fill(255);
      textLeading(25);
      text('Move Left: Press A or <-\nMove Right: Press D or ->', 1250 / 2, 280);
  
      // BACKSTORY TITLE
      textFont(fonts.poppinsBold);
      textSize(18);
      textAlign(CENTER);
      fill(255);
      text('B A C K S T O R Y', 1250 / 2, 365);
  
      // BACKSTORY TEXT
      textFont(fonts.poppinsLight);
      textSize(18);
      textAlign(CENTER);
      fill(255);
      text('Little Willow has just lost her most priced possession, her favorite teddy bear.\nTo get the bear back, she has to catch the falling stars to make her wish come true.\n You have to help her catch as many stars as possible,\nbut look out for the nails!', 1250 / 2, 395);
  
      // READY TO PLAY
      textFont(fonts.poppinsBold);
      textSize(22);
      textAlign(CENTER);
      fill(255);
      text('READY TO PLAY?', 1250 / 2, 515);
  
      // HIT ENTER TO START
      textFont(fonts.poppinsLight);
      textSize(22);
      textAlign(CENTER);
      fill(255);
      text(
        'Hit ENTER to start!',
        1250 / 2,
        550
      );
      pop()
    }
}