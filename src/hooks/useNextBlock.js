import { useState } from "react";

import { randomTetromino } from '../tetrominos';


export const useNextBlock = () => {
    const [nextBlock, setNextBlock] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino().shape,
    });

    const clearBlock = () => {
        setNextBlock({
            pos: null,
            tetromino: 0,
        })
    }

    const resetBlock = () => {
        clearBlock();
        setNextBlock({
            pos: { x: 0, y: 0 },
            tetromino: randomTetromino().shape,
        })
    }

    return [nextBlock, resetBlock];
}
