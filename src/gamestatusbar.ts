class GameStatusbar {
    private pointsCounter: number; 
    private characterHP: number; 
    private score: number; 
    private img: p5.Image;  
    private starImg: p5.Image; 
    private noVolume: p5.Image; 
    private position: p5.Vector;
    private reStartGame: boolean;


    constructor (){
        this.pointsCounter = 0; 
        this.characterHP = 3; 
        this.score = 0;
        this.img = loadImage('assets/muteIcon.png'); 
        this.starImg = loadImage('assets/starPoints.png'); 
        this.noVolume = loadImage('assets/noVolume.png'); 
        this.position = createVector(0, height -87)
        this.reStartGame = false; 
       
    }; 

    update () {
        //this.img.update(); 
        //this.starImg.update();
    } 

    draw () {
        //Statusbaren 
        fill('red')
        rect(0, 600, width, 60);

        
        this.restartGame() 
        this.togglePlaying() 
        this.pointCounter()
        this.characterHPs() 
       
    }

    //on/off musiken när man trycker på knappen 
    //image(this.noVolume, this.position.x +500, this.position.y)
    togglePlaying() {
        image(this.img, this.position.x +1050, this.position.y -5); 
        // this.playButton.mousePressed(this.togglePlaying)
    /*
        if(mouseIsPressed) { 
        audio.pause();  
        audio.currentTime = 0; 
    }
    else {
        audio.play(); 
    }
    */ 
    };
    
    
    // startar om spelet när man klickar på knappen 
    restartGame() {
        fill('black')
        textFont('Poppins'); 
        let reStart = text("Restart Game", 1150, this.position.y +20);

        if (mouseIsPressed) {
            alert('hej')

            } 
        

       // } == true) {
            //alert('vill du spela igen?' )
            //}
            /*
            else if (playAgain == "ja")  {
                alert ("Då kör vi igen!");
                //stepOne ();
            }*/ 


    }

    //Räknar poäng, + när man fångar en stjärna, - när man träffas av en spik 
    pointCounter() {
       image(this.starImg, this.position.x +100, this.position.y-5) 
       fill('black'); 
       text('' + this.score, this.position.x +138, this.position.y +22) 
    }

    // Om man förlorar ett liv 
    characterHPs() {
        fill('black')
        textFont('Poppins'); 
        text("HP :"+ this.characterHP, this.position.x +250, this.position.y +20); 
        textSize(25)

    }

    

} 
