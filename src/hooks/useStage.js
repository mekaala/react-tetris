import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())

    useEffect(() => {
        const updateStage = prevStage => {
            // first flush stage
            // grab clear from cell array
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            // draw tetromino
            // loop through tetromino to choose random tetromino
            // merge = collided
            // otherwise set to clear and deleted in next render
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ];
                    }
                });
            });

            return newStage;
        };

        setStage(prev => updateStage(prev));
    }, [player.collided, player.pos.x, player.pos.y, player.tetromino])

    return [stage, setStage];
}