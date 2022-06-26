function startNewGame() {
    generatePlayer(selectedCharacter);
}

function generatePlayer(type) {
    player.life = 60;
    player.lifeMax = 60;
    player.energy = 8;
    player.energyMax = 8;
    player.position = [320, 320];

    player.hand = [1, 1, 2, 2, 0, 0, 0, 0];
    player.deck = [1, 1, 2, 2];
}

function playCard(ID) {

}

