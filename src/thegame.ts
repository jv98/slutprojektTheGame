class TheGame {
    // private environment: Environment;
    //private player: Player;
    // private fallingObject: FallingObject[];
    // private startMenu: StartMenu;
    private gameStatusbar: GameStatusbar;

    constructor() {
       // this.player = new Player();
        this.gameStatusbar = new GameStatusbar(); 
    }

    update() {
        //this.player.update();
        this.gameStatusbar.update(); 
    }

    draw() {
        clear();
        //this.player.draw();
        this.gameStatusbar.draw(); 
    }

    spawnNewObject() {

    }

    checkCollision() {

    }

}