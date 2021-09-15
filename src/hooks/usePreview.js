import { useState, useEffect } from "react";
import { createPreview } from '../gameHelpers';

export const usePreview = (nextBlock, resetBlock) => {
    const [preview, setPreview] = useState(createPreview())

    useEffect(() => {
        const updatePreview = prevPreview => {
            // first flush stage
            // grab clear from cell array
            const newPreview = prevPreview.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
            );

            // draw tetromino
            // loop through tetromino to choose random tetromino
            // merge = collided
            // otherwise set to clear and deleted in next render
            nextBlock.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newPreview[y][x] = [
                            value,
                        ];
                    }
                });
            });

            return newPreview;
        };
        setPreview(prev => updatePreview(prev));

    }, [nextBlock, resetBlock]);
    return [preview, setPreview];

}