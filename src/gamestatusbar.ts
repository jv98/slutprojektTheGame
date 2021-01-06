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
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;

    constructor (){
        this.pointsCounter = 0; 
        this.characterHP = 3; 
        this.score = 0;
        this.img = loadImage('assets/musicPlay.png'); 
        this.starImg = loadImage('assets/starhp.png'); 
        this.noVolume = loadImage('assets/noVolume.png'); 
        this.position = createVector(0, height -87)
        //this.reStartGame = false; 
        this.oneUpImg =  loadImage('assets/miniOneUp.png');  
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
    }

    update () {

    } 

    draw () {

         //Restart Game text 
         fill('white')
         textFont(this.poppinsBold); 
         textSize(20)
        // const width = textWidth("Restart Game");
         text("Restart", 1120, this.position.y +80);
       

    
        
        //Music img 
       //rectMode(CENTER);
        image(this.img, this.position.x +1050, this.position.y +55); 

        //Stars & lives
        image(this.oneUpImg, this.position.x + 180, this.position.y +60); 
        text (' '+ this.characterHP, this.position.x + 220, this.position.y +80);
        image(this.starImg, this.position.x +80, this.position.y+55) 
        text('' + this.score, this.position.x +125, this.position.y +80);
    }
    

} 

