class TheGame {
    private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private spawnTimerHeart: number
    private player: Player;
    // private startMenu: StartMenu;
    private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = []
        this.spawnTimer = 0
        this.spawnTimerHeart = 0
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

        if (this.gameStatusbar.score < 100) {
            for (const fallingObj of this.fallingObjects) {
                fallingObj.update()
            }
            //fallande björnen
        }
        if (this.gameStatusbar.characterHP == 0) {
            //stoppa spelet
        }
        this.gameStatusbar.update(); 
    }
    
    draw() {
        clear();
        this.environment.draw();
        this.player.draw();

        if (this.gameStatusbar.score < 100) {
            for (const fallingObj of this.fallingObjects) {
                fallingObj.draw()
            }
        }
        if (this.gameStatusbar.characterHP == 0) {
            //stoppa spelet
        }
        this.gameStatusbar.draw(); 
    }

    spawnNewObject() {
        if (this.spawnTimer > 1500) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());     
               
        }
        if (this.spawnTimerHeart > 15000) {
            this.spawnTimerHeart = 0;
            this.fallingObjects.push(new ExtraLife());    
            
        }
        
                
        this.spawnTimerHeart += deltaTime
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