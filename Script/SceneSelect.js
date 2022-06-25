var UISelect = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64],
    characterButton : [[64, 128, 128, 128], [256, 128, 128, 128], [448, 128, 128, 128], [64, 384, 128, 128], [256, 384, 128, 128], [448, 384, 128, 128]],
    startButton : [864, 544, 128, 64],
};

function loopSelect() {
    displaySelect();
}

function displaySelect() {
    context.strokeStyle = 'Black';
    context.fillStyle = 'Black';
    context.font = '48px Opensans';
    context.lineWidth = 2;

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select Character`, UISelect.titleText[0], UISelect.titleText[1]);
    strokeRectArray(UISelect.backButton);

    for (var i = 0; i < 6; i++) {
        strokeRectArray(UISelect.characterButton[i]);
    }

    strokeRectArray(UISelect.startButton);
}

function mouseUpSelect(x, y) {
    if (menu === false) {
        if (state === '') {
            
        }
    }
}

function keyDownSelect(key) {

}

function keyUpSelect(key) {
    
}