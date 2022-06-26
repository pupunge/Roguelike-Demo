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

    context.drawRect(Math.floor(player.position[0]), Math.floor(player.position[1]), 64, 64);
}

function playerMove() {
    if (player.move === true) {
        var positionDiff = [player.destination[0] - player.position[0], player.destination[1] - player.position[1]];

        if (vectorSize(positionDiff) < 3) {
            player.move = false;
            return;
        }

        player.velocity = vectorMultipleConstant(vectorNormalize(positionDiff), player.speed);
        player.position[0] += player.velocity[0];
        player.position[1] += player.velocity[1];
    }
}

function enemyMove() {

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