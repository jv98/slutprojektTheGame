class MuteButton {
    x: number; 
    y:number; 
    r:number; 
    content: p5.Image | string;  
    type: 'image' | 'text'; 
    prevMuteIsPressed: boolean; 
    public poppinsBold: p5.Font;
    public poppinsLight: p5.Font;



    constructor(x: number, y:number, r: number, content: p5.Image | string, type: 'image'|'text'){
        this.x = x; 
        this.y = y;  
        this.r = r; 
        this.content = content; 
        this.type = type; 
        this.prevMuteIsPressed = mouseIsPressed; 
        this.poppinsBold = loadFont('./assets/poppins/Poppins-Bold.ttf');
        this.poppinsLight = loadFont('./assets/poppins/Poppins-Light.ttf');

    }

    update(){
        if(!this.prevMuteIsPressed && mouseIsPressed) { 
            let mute = dist(mouseX, mouseY, this.x, this. y)
            if(mute < this.r){
                console.log('mute music')
                //mute function() 
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
        pop()
    }

    circle(){
        noStroke();
        noFill(); 
        ellipse(this.x, this.y, this.r); 
        
    }

    
    
}

