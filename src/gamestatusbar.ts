class GameStatusbar {
    private pointsCounter: number; 
    public characterHP: number; 
    public score: number; 
    private starImg: p5.Image; 
    //private noVolume: p5.Image; 
    private position: p5.Vector;
    private oneUpImg: p5.Image; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;
    public button: restartButton; 
    private muteButton: MuteButton; 
    private musicPlay: p5.Image;  


    constructor (){
        this.pointsCounter = 0; 
        this.characterHP = 3; 
        this.score = 0;
        this.starImg = loadImage('assets/starhp.png'); 
        this.oneUpImg =  loadImage('assets/miniOneUp.png');  

        //this.noVolume = loadImage('assets/noVolume.png'); 
        this.position = createVector(0, height -87)
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
        this.button = new restartButton(1150,height -20,160,'image','text'); 
        this.muteButton = new MuteButton(970,height -5,80,'image', 'text') 
        this.musicPlay = loadImage('assets/musicPlay.png'); 

    }

    update () {
        this.button.update();
        this.muteButton.update(); 
    } 

    draw () {
        push();
        this.muteButton.draw(); 

        this.button.draw(); 
        textFont(this.poppinsBold); 
        textAlign(CENTER, CENTER)
        textSize(20)
        fill('white')
       
       
        //Music img 
        image(this.musicPlay, this.position.x +990, this.position.y +52); 
        //Stars & lives
        image(this.oneUpImg, this.position.x + 220, this.position.y +60); 
        text (' '+ this.characterHP, this.position.x + 260, this.position.y +70);
        image(this.starImg, this.position.x +95, this.position.y+55) 
        text('' + this.score, this.position.x +138, this.position.y +73);
        pop(); 
    }
    

} 

