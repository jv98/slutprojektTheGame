interface ISounds {
    ouch: p5.SoundFile;
    life: p5.SoundFile;
    backgroundMusic: p5.SoundFile;
    starr: p5.SoundFile;
    win: p5.SoundFile;
    lose: p5.SoundFile;
}

interface IImages {
    logo: p5.Image;
    playerTrophy: p5.Image;
    playImg: p5.Image;
    muteImg: p5.Image; 
    starImg: p5.Image; 
    oneUpImg: p5.Image;
    platform: p5.Image;
    badThing: p5.Image;
    star: p5.Image;
    extraLife: p5.Image;
}

interface IFonts {
    poppinsBold: p5.Font;
    poppinsMedium: p5.Font;
    poppinsLight: p5.Font;
}

function setupPlayerImages() {
    const playerImgCount = 7;
    for (let i = 1; i <= playerImgCount; i++) {
        playerImgMovingLeft.push(loadImage('assets/player-left' + i + '.png'));
        playerImgMovingRight.push(loadImage('assets/player-right' + i + '.png'));
    }
}