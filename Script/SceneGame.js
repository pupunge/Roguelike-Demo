var UIGame = {
    handCardRect : [128, 544, 512, 64],
    handCardList : [[128, 544], [192, 544], [256, 544], [320, 544], [384, 64], [448, 64], [512, 64], [576, 64]],
};

function loopGame() {
    playerMove();
    enemyMove();
    displayGame();
}

function displayGame() {
    context.strokeStyle = 'Black';
    context.fillStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    // Player display
    context.strokeRect(Math.floor(player.position[0] - 32), Math.floor(player.position[1] - 32), 64, 64);

    context.strokeStyle = 'Green';

    // Enemy display
    for (i = 0; i < field.enemy.length; i++) {
        context.strokeRect(Math.floor(field.enemy[i]['Position'][0] - 32), Math.floor(field.enemy[i]['Position'][1] - 32), 64, 64);
    }

    // Lower UI
    context.strokeStyle = 'Black';
    
    strokeRectArray(UIGame.handCardRect);

    for (var i = 0; i < 8; i++) {
        if (player.hand[i] != 0) {
            strokeRectArray([UIGame.handCardList[i][0], UIGame.handCardList[i][1], 64, 64]);
        }
    }
}

function mouseUpGameLeft(x, y) {
    if (menu === false) {
        if (state === '') {
            
        }
    }
}

function mouseUpGameRight(x, y) {
    if (menu === false) {
        if (state === '') {
            player.destination = [x, y];
            player.moving = true;
        }
    }
}

function keyDownGame(key) {
    if (menu === false) {
        if (state === '') {
            
        }
    }
}

function keyUpGame(key) {
    if (menu === false) {
        if (state === '') {

        }
    }
}