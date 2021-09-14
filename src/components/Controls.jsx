import React from 'react'
import { StyledControls, StyledKeys, StyledShift} from './styles/StyledControls';

const Controls = () => (
    <StyledControls>
        <h3>Keyboard Controls</h3>
        <StyledKeys>←</StyledKeys> Move Left<br/>
        <StyledKeys>→</StyledKeys> Move Right<br/>
        <StyledKeys>↓</StyledKeys> Move Down<br/>
        <StyledKeys>↑</StyledKeys> Hard Drop<br/>
        <StyledKeys>/</StyledKeys> Rotate Left<br/>
        <StyledShift>shift</StyledShift> Rotate Right<br/>
    </StyledControls>
);

export default Controls;