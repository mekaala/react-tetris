export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const NEXT_WIDTH = 4;
export const NEXT_HEIGHT = 4;

export const createNextBlock = () =>
    Array.from(Array(NEXT_HEIGHT), () => new Array(NEXT_WIDTH).fill([0, 'clear']));

export const createStage = () => 
// create new array from an array with stage height of 20
// for each row, create new array with cells with one value that is zero
// clear will clear blocks
    Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear']));

// need to use for loop
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    // looping through tetromino
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // check if you are on tetromino cell
            if (player.tetromino[y][x] !== 0) {
                // check if movement is inside of game area's height (y)
                // do not go through the bottom of the play area
                // check that our move is inside the game area's height (x)
                // check if the cell that we're moving to isn't set to clear
                if (
                    !stage[y + player.pos.y + moveY] || 
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}