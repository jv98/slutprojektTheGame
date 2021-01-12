class RestartButton {
    x: number; 
    y:number; 
    width:number; 
    prevMouseIsPressed: boolean; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;
    


    constructor(x: number, y:number, r: number){
        this.x = x; 
        this.y = y;  
        this.width = r; 
        this.prevMouseIsPressed = mouseIsPressed; 
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');
       
    }

    update(){
        if(!this.prevMouseIsPressed && mouseIsPressed) { 
            let d = dist(mouseX, mouseY, this.x, this.y) *2
            if(d < this.width){
                game = new TheGame(); 
                sounds.backgroundMusic.stop()
                console.log('Restart')

            }
        }
        this.prevMouseIsPressed = mouseIsPressed; 

    }

    draw(){
        push()
        this.circle();
        fill('white')
        textFont(this.poppinsBold); 
        textAlign(CENTER, CENTER)
        textSize(20)
        text("Restart", this.x, this.y);
        pop()
    }

    circle(){
        noStroke();
        fill('red'); 
        ellipse(this.x, this.y, this.width); 
    }

}

