class TheGame {
    // private environment: Environment;
    private star: Star;
    // private fallingObject: FallingObject[];
    // private startMenu: StartMenu;
    // private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
    }

    update() {
        this.star.update();
    }

    draw() {
        this.star.draw();
    }

    spawnNewObject() {

    }

    checkCollision() {

    }

}