import React from 'react';
import { StyledNextBlock } from './styles/StyledNextBlock';
import Cell from './Cell';

const NextBlock = ({ preview }) => (
    <StyledNextBlock width={preview[0].length} height={preview.length}>
        {preview.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledNextBlock>
);

export default NextBlock;