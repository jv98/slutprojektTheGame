class MuteButton {
    private x: number; 
    private y:number; 
    private width:number; 
    private prevMuteIsPressed: boolean; 
    private isMuted: boolean;
    private position: p5.Vector;


    constructor(x: number, y:number, width: number){
        this.x = x; 
        this.y = y;  
        this.width = width; 
        this.prevMuteIsPressed = mouseIsPressed; 
        this.isMuted = false;
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

    /**
     * The function toggles between setting the volume to 0 and 0.1 
     * to make the background music mute. 
     */
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
        textFont(fonts.poppinsLight); 
        textAlign(CENTER, CENTER)
            //Toggles the mute picture.
            if(this.isMuted) {
                image(images.muteImg, this.position.x +980, this.position.y +54); 
            } else{
                image(images.playImg, this.position.x +980, this.position.y +54); 
            }
        pop()
    }

    circle(){
        noStroke();
        noFill(); 
        ellipse(this.x, this.y, this.width); 
        
    }
}

