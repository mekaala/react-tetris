import React from 'react';
import { StyledNextBlock } from './styles/StyledNextBlock';
import Cell from './Cell';

const NextBlock = ({ block }) => (
    <StyledNextBlock width={block[0].length} height={block.length}>
        {block.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledNextBlock>
);

export default NextBlock;