class GameStatusbar {
    public characterHP: number; 
    public score: number; 
    private starImg: p5.Image; 
    private position: p5.Vector;
    private oneUpImg: p5.Image; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;
    public restartButton: RestartButton; 
    private muteButton: MuteButton; 


    constructor (){
        this.characterHP = 3; 
        this.score = 0;
        this.starImg = loadImage('assets/starhp.png'); 
        this.oneUpImg =  loadImage('assets/miniOneUp.png');  
        this.position = createVector(0, height -87)
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
        this.restartButton = new RestartButton(1150,height -20,160); 
        this.muteButton = new MuteButton(1000,height -5,80) 

    }

    update () {
        this.restartButton.update();
        this.muteButton.update(); 
    } 

    draw () {
        push();
        this.muteButton.draw(); 
        this.restartButton.draw(); 
        textFont(this.poppinsBold); 
        textAlign(CENTER, CENTER);
        textSize(20);
        fill('white');
        image(this.oneUpImg, this.position.x + 220, this.position.y +60); 
        text (' '+ this.characterHP, this.position.x + 260, this.position.y +70);
        image(this.starImg, this.position.x +95, this.position.y+55);
        text('' + this.score, this.position.x +145, this.position.y +73);
        pop(); 
    }

} 

