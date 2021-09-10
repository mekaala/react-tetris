export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
// create new array from an array with stage height of 20
// for each row, create new array with cells with one value that is zero
// clear will clear blocks
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )