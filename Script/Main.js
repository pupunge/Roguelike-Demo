window.onload = main;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp);
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    loop();
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'Game') {
        loopGame();
    }

    requestAnimationFrame(loop); 
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.ciientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y);
    } else if (scene === 'Game') {
        mouseUpGame(x, y);
    }
}

function keyDown(event) {
    var key = event.keyCode;

    if (scene === 'Title') {
        keyDownTitle(key);    
    } else if (scene === 'Game') {
        keyDownGame(key);
    }
}

function keyUp(event) {
    var key = event.keyCode;

    if (scene === 'Title') {
        keyUpTitle(key);
    } else if (scene === 'Game') {
        keyUpTitle(key);
    }
}

function rightClick() {
    return false;
}
