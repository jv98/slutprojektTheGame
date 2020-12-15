class TheGame {
    // private environment: Environment;
    private player: Player;
    // private fallingObject: FallingObject[];
    // private startMenu: StartMenu;
    // private gameStatusbar: GameStatusbar;

    constructor() {
        this.player = new Player();
    }

    update() {
        this.player.update();
    }

    draw() {
        clear();
        this.player.draw();
    }

    spawnNewObject() {

    }

    checkCollision() {

    }

}