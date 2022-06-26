var img = {
    player : {'Up' : new Image(), 'Left' : new Image(), 'Down' : new Image(), 'Right' : new Image()},
    energyFull : new Image(),
    energyEmpty : new Image(),

    floor : {
        grass : new Image(),
        tile : new Image(),
    },

    enemy : [
        0,
        new Image(),
        new Image(),
        new Image(),
    ],
};

function imageLoad() {
    img.player['Up'].src = 'Image/PlayerUp.png';
    img.player['Left'].src = 'Image/PlayerLeft.png';
    img.player['Down'].src = 'Image/PlayerDown.png';
    img.player['Right'].src = 'Image/PlayerRight.png';

    img.energyFull.src = 'Image/EnergyFull.png';
    img.energyEmpty.src = 'Image/EnergyEmpty.png';

    img.floor.grass.src = 'Image/Grass.png';
    
    img.enemy[1].src = 'Image/GreenSlime.png';
}

function createOffscreenCanvas() {
    canvas.energyFull = document.createElement('canvas');
    canvas.energyEmpty = document.createElement('canvas');
    canvas.grass = document.createElement('canvas');
    canvas.enemy = [];
    canvas.enemy[1] = document.createElement('canvas');

    canvas.energyFullCtx = canvas.energyFull.getContext('2d');
    canvas.energyEmptyCtx = canvas.energyEmpty.getContext('2d');
    canvas.grassCtx = canvas.grass.getContext('2d');
    canvas.enemyCtx = [];
    canvas.enemyCtx[1] = canvas.enemy[1].getContext('2d');

    canvas.energyFull.width = 64;
    canvas.energyEmpty.width = 64;
    canvas.grass.width = 64;
    canvas.enemy[1].width = 64;

    canvas.energyFull.height = 64;
    canvas.energyEmpty.height = 64;
    canvas.grass.height = 64;
    canvas.enemy[1].height = 64;

    canvas.energyFullCtx.drawImage(img.energyFull, 0, 0);
    canvas.energyEmptyCtx.drawImage(img.energyEmpty, 0, 0);
    canvas.grassCtx.drawImage(img.floor.grass, 0, 0);
    canvas.enemyCtx[1].drawImage(img.enemy[1], 0, 0);
}