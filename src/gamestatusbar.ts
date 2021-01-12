class GameStatusbar {
    public characterHP: number; 
    public score: number; 
    private position: p5.Vector;
    public restartButton: RestartButton; 
    private muteButton: MuteButton; 


    constructor (){
        this.characterHP = 3; 
        this.score = 0;
        this.position = createVector(0, height -87)
        this.restartButton = new RestartButton(1150,height -20,110); 
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
        textFont(fonts.poppinsBold); 
        textAlign(CENTER, CENTER);
        textSize(20);
        fill('white');
        image(images.oneUpImg, this.position.x + 220, this.position.y +60); 
        text (' '+ this.characterHP, this.position.x + 260, this.position.y +70);
        image(images.starImg, this.position.x +95, this.position.y+55);
        text('' + this.score, this.position.x +145, this.position.y +73);
        pop(); 
    }

} 

