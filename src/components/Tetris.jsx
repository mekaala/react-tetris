import React from 'react'

// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// Scripts
import { createStage } from '../gameHelpers'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

const Tetris = () => {
    return (
        <div className="tetris">
            <StyledTetrisWrapper>
                <StyledTetris>
                    <Stage stage={createStage()}/>
                    <aside>
                        <div>
                            <Display text="Score"/>
                            <Display text="Rows"/>
                            <Display text="Level"/>
                        </div>
                        <StartButton/>
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
        </div>
    )
}

export default Tetris