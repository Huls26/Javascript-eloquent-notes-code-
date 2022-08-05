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
    // down
    if (grid[y2]) {
        if (grid[y2][x2]) {
            return false
        }
    }
   
    if (!grid[y2]) {
        return false
    }

    if (grid[y1][x1]) {
        return true
    }

    return true
}

// 3. Task: Gravity
function doGravity(grid, x, y) {
    if (grid[y][x] && y === grid.length -1) {
        return grid
    }

    // bottom
    if (checkMove(grid, x, y, x, y + 1)) {
        return doMove(grid, x, y, x, y + 1)
    }

    // down left
    if (checkMove(grid, x, y, x - 1, y + 1)) {
        if (!grid[y][x-1]) {
            return doMove(grid, x, y, x - 1, y + 1)
        }
    }

    // down right
    if (checkMove(grid, x, y, x + 1, y + 1)) {
        if (!grid[y][x + 1]) {
            return doMove(grid, x, y, x + 1, y + 1)
        }
    }

    if (!checkMove(grid, x, y, x, y + 1))  return grid

    // return grid
}

// 4. Task: Loop through the whole grid
function doWholeGrid(grid, brownian) {
    let height = grid.length - 1;
    let br

    for (let i = height; i >= 0; i--) {
        let row = grid[i].length - 1
        for (let k = row; k >= 0; k--) {
            br = doGravity(grid, k, i);
            if (i !== 0) {
                i = i - 1
               doBrownian(grid, k, i, brownian)
            }
        }
    }

    return br
}

// 5. Task: Create Brownian motion
function doBrownian(grid, x, y, brownian) {
    if (grid[y][x] === "s") {
        let num = Math.floor(Math.random() * 100);
        if (num < brownian) {
           let coin = Math.floor(Math.random() * 2);
           let x2;
           let y2 = y + 1

           if (coin < 1) {
                x2 = x - 1
           } else {
                x2 = x + 1
           }

           if (checkMove(grid, x, y, x2, y2)) {
                return doMove(grid, x, y, x2, y2)
           }
        }
    }
}

// let None = null;
// let grid = [[None, 's', None], [None, None, None]]
// console.log(doWholeGrid(grid, 99))

// grid = [[None, None, None], [None, 's', None], [None, None, 's']];
// console.log(doWholeGrid(grid, 99))

// test
function test() {
    let None = null;
    let grid = [[None, 's', 'r'], [None, None, None]];

    // do move
    // doMove(grid, 1, 0, 1, 1)
    // grid = [['r', 's', 's'], [None, None, None]]
    // doMove(grid, 2, 0, 2, 1)

    // 2. Task: Checking legal moves
    // console.log(checkMove(grid, 1, 0, 0, 0));
    // // true
    // console.log(checkMove(grid, 1, 0, 1, 1));
    // // true
    // console.log(checkMove(grid, 1, 0, 2, 0));
    // // false
    // console.log(checkMove(grid, 1, 0, 2, 0));
    // // false

    // 3. Task: Gravity
    grid = [[None, 's', None], [None, None, None]]
    console.log(doGravity(grid, 0, 0))

    // >>> # down
    grid = [[None, 's', None], [None, None, None]];
    console.log(doGravity(grid, 1, 0));
    // [[None, None, None], [None, 's', None]]

    // >>> # bottom blocked 
     grid = [[None, 's', None], ['r', 'r', 'r']]
    console.log(doGravity(grid, 1, 0))
    // [[None, 's', None], ['r', 'r', 'r']]

    // >>> # rock-below down-left
    grid = [[None, 's', None], [None, 'r', None]]
    console.log(doGravity(grid, 1, 0))
    // [[None, None, None], ['s', 'r', None]]

    // # sand-below down-right
    grid = [[None, 's', None], ['s', 's', None]]
    console.log(doGravity(grid, 1, 0));
    // [[None, None, None], ['s', 's', 's']]

    // # sand corner: down-right
    grid = [['s', 's', None], [None, 's', None]]
    console.log(doGravity(grid, 1, 0));
    // [['s', None, None], [None, 's', 's']]

    // >>> # at bottom already
    grid = [[None, None, None], [None, 's', None]]
    console.log(doGravity(grid, 1, 1))
    // [[None, None, None], [None, 's', None]]
}

// test()

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1226/handouts/11-assignment4.html