"use strict"

// 1. Task: Moving elements in the grid
function doMove(grid, x1, y1, x2, y2) {
    let old = grid[y1][x1];
    grid[y1][x1] = null;
    grid[y2][x2] = old;
    
    return grid
}

// 2. Task: Checking legal moves
function checkMove(grid, x1, y1, x2, y2) {
    if (grid[y2][x2]) {
        return false
    }
    if (!grid[x2] || !grid[y2]) {
        return false
    }

    return true
}

// test
function test() {
    let None = null;
    let grid = [[None, 's', 'r'], [None, None, None]];

    // do move
    // doMove(grid, 1, 0, 1, 1)
    // grid = [['r', 's', 's'], [None, None, None]]
    // doMove(grid, 2, 0, 2, 1)

    // 2. Task: Checking legal moves
    console.log(checkMove(grid, 1, 0, 0, 0));
    // true
    console.log(checkMove(grid, 1, 0, 1, 1));
    // true
    console.log(checkMove(grid, 1, 0, 2, 0));
    // false
    console.log(checkMove(grid, 1, 0, 2, 0));
}

test()