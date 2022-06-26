function startNewGame() {
    generatePlayer(selectedCharacter);
    //generateRoom(level);
    generateEnemy(1);
}

function generatePlayer(type) {
    player.life = 60;
    player.lifeMax = 60;
    player.energy = 8;
    player.energyMax = 8;
    player.position = [320, 320];

    player.hand = [0, 0, 0, 0, 0, 0, 0, 0];

    playerDeckGenerate();
    
    for (var i = 0; i < 4; i++) {
        drawFromDeck();
    }
}

function playerDeckGenerate() {
    player.deck = [];

    var tempCard = {'ID' : 1, 'Name' : dataCard[1]['Name'], 'Type' : dataCard[1]['Type'], 'Element' : dataCard[1]['Element'], 'Energy' : dataCard[1]['Energy'], 'Play' : dataCard[1]['Play']};
    
    for (var i = 0; i < 4; i++) {
        player.deck.push(tempCard);
    }

    tempCard = {'ID' : 2, 'Name' : dataCard[2]['Name'], 'Type' : dataCard[2]['Type'], 'Element' : dataCard[2]['Element'], 'Energy' : dataCard[2]['Energy'], 'Play' : dataCard[2]['Play']};

    for (var i = 0; i < 4; i++) {
        player.deck.push(tempCard);
    }
}

function drawFromDeck() {
    if (player.deck.length > 0) {
        var tempCard = player.deck.shift();

        for (var i = 0; i < 8; i++) {
            if (player.hand[i] === 0) {
                player.hand[i] = tempCard;
                return;
            } 
        }
    }
}

function generateEnemy(level) {
    field.enemy = [];

    for (var i = 0; i < 6; i++) {
        var randPos = [128 + Math.floor(Math.random() * 768), 128 + Math.floor(Math.random() * 384)];
        spawnEnemy(1, randPos);
    }
}

function spawnEnemy(ID, position) {
    var tempEnemy = {'ID' : ID, 'Attack' : dataEnemy[ID]['Attack'], 'Life' : [dataEnemy[ID]['Life'], dataEnemy[ID]['Life']], 'Speed' : dataEnemy[ID]['Speed'], 'Velocity' : [0, 0], 'Position' : [position[0], position[1]], 'Destination' : [0, 0], 'Moving' : true, 'State' : []};
    field.enemy.push(tempEnemy);
}

function playerMove() {
    if (player.moving === true) {
        var positionDiff = [player.destination[0] - player.position[0], player.destination[1] - player.position[1]];

        if (vectorSize(positionDiff) < 10) {
            player.moving = false;
            return;
        }

        player.velocity = vectorMultipleConstant(vectorNormalize(positionDiff), player.speed);
        player.position[0] += player.velocity[0];
        player.position[1] += player.velocity[1];
    }
}

function enemyMove() {
    for (var i = 0; i < field.enemy.length; i++) {
        if (field.enemy[i]['Moving'] === true) {
            field.enemy[i]['Destination'] = [player.position[0], player.position[1]];
            var positionDiff = [field.enemy[i]['Destination'][0] - field.enemy[i]['Position'][0], field.enemy[i]['Destination'][1] - field.enemy[i]['Position'][1]];

            if (vectorSize(positionDiff) > 10) {
                field.enemy[i]['Velocity'] = vectorMultipleConstant(vectorNormalize(positionDiff), field.enemy[i]['Speed']);
                field.enemy[i]['Position'][0] += field.enemy[i]['Velocity'][0];
                field.enemy[i]['Position'][1] += field.enemy[i]['Velocity'][1];
            }
        }
    }
}

function playCard(ID) {

}

