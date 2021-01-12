class MuteButton {
    private x: number; 
    private y:number; 
    private width:number; 
    private prevMuteIsPressed: boolean; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;
    private isMuted: boolean;
    private position: p5.Vector;
    private playImg: p5.Image;  
    private muteImg: p5.Image; 


    constructor(x: number, y:number, width: number){
        this.x = x; 
        this.y = y;  
        this.width = width; 
        this.prevMuteIsPressed = mouseIsPressed; 
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
        this.isMuted = false;
        this.playImg = loadImage('assets/musicPlay.png'); 
        this.muteImg = loadImage('assets/mute.png'); 
        this.position = createVector(0, height -87);

    }

    private mute() {
        this.isMuted = true;
        sounds.backgroundMusic.setVolume(0.0);
    }

    private unmute() {
        this.isMuted = false;
        sounds.backgroundMusic.setVolume(0.1);
    }

    update(){
        if(!this.prevMuteIsPressed && mouseIsPressed) { 
            let mute = dist(mouseX, mouseY, this.x, this.y) *2
            if(mute < this.width) {
                if(this.isMuted) {
                    this.unmute()
                } else{
                    this.mute()
                }
            }
        }
        this.prevMuteIsPressed = mouseIsPressed; 
    }

    draw(){
        push()
        this.circle();
        fill('white')
        textFont(this.poppinsLight); 
        textAlign(CENTER, CENTER)
            if(this.isMuted) {
                image(this.muteImg, this.position.x +990, this.position.y +52); 
            } else{
                image(this.playImg, this.position.x +990, this.position.y +52); 
            }
        pop()
    }

    circle(){
        noStroke();
        noFill(); 
        ellipse(this.x, this.y, this.width); 
        
    }
}

