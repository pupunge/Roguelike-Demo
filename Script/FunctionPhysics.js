function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3];
}

function vectorSize(vec) {
    return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}

function vectorNormalize(vec) {
    var vecSize = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);

    if (vecSize < 0.001) {
        return [0, 0];
    }

    return [vec[0] / vecSize, vec[1] / vecSize];
}

function vectorMultipleConstant(vec, a) {
    return [vec[0] * a, vec[1] * a];
}