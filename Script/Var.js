var canvas;
var context;
var canvasRect;

var scene = 'Title';
var state = '';
var menu = false;
var pause = false;

var selectedCharacter = -1;

var player = {
    life : 60,
    lifeMax : 60,
    energy : 6,
    energyMax : 6,
    speed : 8,

    hand : [],
    deck : [],

    position : [320, 320],
    velocity : [0, 0],
    destination : [320, 320],
    moving : false,

    currentRoom : [0, 0],
};

var field = {
    level : 1,
    rooms : [],
    enemy : [],
};
