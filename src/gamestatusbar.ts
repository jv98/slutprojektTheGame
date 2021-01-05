class GameStatusbar {
    private pointsCounter: number; 
    public characterHP: number; 
    private score: number; 
    private img: p5.Image;  
    private starImg: p5.Image; 
    private noVolume: p5.Image; 
    private position: p5.Vector;
    //private reStartGame: boolean;
    private oneUpImg: p5.Image; 
    //private muteButton: MuteButton;
    //private resetButton: ResetButton;

    constructor (){
        this.pointsCounter = 0; 
        this.characterHP = 3; 
        this.score = 0;
        this.img = loadImage('assets/muteIcon.png'); 
        this.starImg = loadImage('assets/starPoints.png'); 
        this.noVolume = loadImage('assets/noVolume.png'); 
        this.position = createVector(0, height -87)
        //this.reStartGame = false; 
        this.oneUpImg =  loadImage('assets/oneUpStatusbar.png');  
    }

    update () {

    } 

    draw () {
        //Statusbaren 
        fill('grey')
        rect(0, 600, width, 60);

        //Restart Game text 
        fill('black')
        textFont('Poppins'); 
        textSize(25)
       // const width = textWidth("Restart Game");
        text("Restart Game", 1150, this.position.y +20);
        
        
        //Music img 
       //rectMode(CENTER);
        image(this.img, this.position.x +1050, this.position.y -5); 

        //Stars & lives
        image(this.oneUpImg, this.position.x + 220, this.position.y -2); 
        text (' '+ this.characterHP, this.position.x + 255, this.position.y +20);
        image(this.starImg, this.position.x +100, this.position.y-5) 
        text('' + this.score, this.position.x +138, this.position.y +22);
    }
    

} 

