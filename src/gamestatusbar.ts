

class GameStatusbar {
    private pointsCounter: number; 
    private characterHP: number; 
    //private restartButton: HTMLElement; 
    //private mute: HTMLButtonElement; 
    private score: number; 
    private img: p5.Image;  
    private starImg: p5.Image; 
    private noVolume: p5.Image; 
    private position: p5.Vector;


    constructor (){
        this.pointsCounter = 0; 
        this.characterHP = 3; 
        //this.restartButton = button2; 
        //this.mute = button1; 
        this.score = 0;
        this.img = loadImage('assets/muteIcon.png'); 
        this.starImg = loadImage('assets/starPoints.png'); 
        this.noVolume = loadImage('assets/noVolume.png'); 
        this.position = new p5.Vector();
        this.position.x = 100; 

    }


    update () {
        //this.img.update(); 
        //this.starImg.update(); 

    
    } 

    draw () {
        image(this.img, this.position.x, this.position.y +10, 100, 100); 
        image(this.starImg, this.position.x, this.position.y)
        image(this.noVolume, this.position.x, this.position.y)

        fill('black')
        textFont('Poppins'); 
        text("HP :"+ this.score ,600 , 600); //Skapar text med poängen, tvp sista är placering av texten
    
        textSize(25)
        text("Restart Game", 1000, 600);

    }



    //on/off musiken när man trycker på knappen 
    togglePlaying() {

    }

    // startar om spelet när man klickar på knappen 
    restartGame() {

    }
    //Räknar poäng, + när man fångar en stjärna, - när man träffas av en spik 
    pointCounter() {
    //score 
    }


    characterHPs() {
        // Om man förlorar ett liv 
    }

    

} 
