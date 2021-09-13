import React from 'react'
import { StyledControls, StyledKeys, StyledShift} from './styles/StyledControls';

const Controls = () => (
    <StyledControls>
        <StyledKeys>→</StyledKeys> Move Right<br/>
        <StyledKeys>←</StyledKeys> Move Left<br/>
        <StyledKeys>↓</StyledKeys> Move Down<br/>
        <StyledKeys>↑</StyledKeys> Rotate Right<br/>
        <StyledShift>shift</StyledShift> Rotate Left<br/>
        <StyledKeys>\</StyledKeys> Hard Drop<br/>
    </StyledControls>
);

export default Controls;