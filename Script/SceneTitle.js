var UITitle = {
    titleText : [8, 48],
    startGameButton : [128, 128, 768, 64],
    startGameText : [136, 176],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.strokeStyle = 'Black';
    context.fillStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Desserterria Roguelike`, UITitle.titleText[0], UITitle.titleText[1]);
    
    strokeRectArray(UITitle.startGameButton);
    context.fillText(`Start Game`, UITitle.startGameText[0], UITitle.startGameText[1]);
}

function mouseUpTitle(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UITitle.startGameButton)) {
                scene = 'Select';
                state = '';
            }
        }
    }
}

function keyDownTitle(key) {
    
}

function keyUpTitle(key) {

}