class TheGame {
    private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private spawnTimerHeart: number
    private player: Player;
    private gameStatusbar: GameStatusbar;
    private stuffedAnimal: StuffedAnimal;
    private startMenu: StartMenu;
    private menuMode: boolean;
    private endSceneWon: EndSceneWin;
    private endSceneLost: EndSceneLost;
    private endSceneMode: boolean;

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
        this.stuffedAnimal = new StuffedAnimal();
        this.startMenu = new StartMenu();
        this.menuMode = true;
        this.endSceneWon = new EndSceneWin();
        this.endSceneLost = new EndSceneLost();
        this.endSceneMode = false;
    }

    update() {
        
        if (this.menuMode) {
            if (keyCode === ENTER) {
                this.menuMode = false;
            }
        } else if (this.endSceneMode) {
            if (keyCode === ENTER) {
                this.endSceneMode = false;
                location.reload();
            }
        } 
        else {
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
            }
            if (this.gameStatusbar.score === 100) {
                this.stuffedAnimal.update();
                //winning message from EndScene
                this.endSceneMode = true;
            }
            if (this.gameStatusbar.characterHP == 0) {
                //losing message from EndScene
                this.endSceneMode = true;
            }
            this.gameStatusbar.update(); 
        }
    }
    
    draw() {
        clear();
        
        if (this.menuMode) {
            this.startMenu.draw();
        } else {
            this.environment.draw();
            this.player.draw();

            if (this.gameStatusbar.score < 100) {
                for (const fallingObj of this.fallingObjects) {
                    fallingObj.draw()
                }
            }
            if (this.gameStatusbar.score === 100) {
                //winning message from EndScene med setTimeout, så björnen hunnit falla ner.
                this.endSceneWon.draw();
            }
            if (this.gameStatusbar.characterHP == 0) {
                //losing message from EndScene
                this.endSceneLost.draw();
            }
            this.stuffedAnimal.draw();
            this.gameStatusbar.draw(); 
        }
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