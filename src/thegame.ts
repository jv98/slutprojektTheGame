class TheGame {
    private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private player: Player;
    // private startMenu: StartMenu;
    private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = []
        this.spawnTimer = 0
        this.player = new Player();
        this.environment = new Environment();
        this.gameStatusbar = new GameStatusbar(); 
        
    }

    update() {
        this.player.update();
        this.star.update();
        this.badthing.update();
        this.extraLife.update();
        this.checkCollision()
        this.spawnNewObject()
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update()
        }
        this.gameStatusbar.update(); 
    }
    
    draw() {
        clear();
        this.environment.draw();
        this.player.draw();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.draw()
        }
        this.gameStatusbar.draw(); 
    }


    //TODO: hur får hjärtanen att spawna mer sällan?
    spawnNewObject() {
        if (this.spawnTimer > 1500) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());     
            this.fallingObjects.push(new ExtraLife());       
        }
        if (this.spawnTimer > 3000) {
            this.spawnTimer = 0;
            
        }
        
                
        this.spawnTimer += deltaTime
    }

    checkCollision() {
        for (const fallingObj of this.fallingObjects) {                 
        let i = this.fallingObjects.indexOf(fallingObj)
            
            if(fallingObj instanceof Star) {     
                if (this.player.bucketCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Poäng") 
                    this.gameStatusbar.score = this.gameStatusbar.score + 10
                    //Add points in statusbar + soundeffect
                }
            }   

            if (fallingObj instanceof BadThing) {      
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Ouch"); 
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP - 1
                    this.gameStatusbar.score = this.gameStatusbar.score - 10
                    // Decrease life in statusBar + soundeffect
                }
                
            }
            if (fallingObj instanceof ExtraLife) {             
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("1up!!!"); 
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP + 1
                    // Add life to statusBar + soundeffect
                }
                
            }
        }
    }
}