import React, { useState } from 'react'

import { createStage, checkCollision } from '../gameHelpers';

// Style Components
import { StyledTetrisWrapper, StyledTetris, StyledButtons, StyledDPad, StyledFace } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import NextBlock from './NextBlock';
import Controls from './Controls';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);


    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, preview, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const startGame = () => {
        // reset game
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    // MOVING BLOCKS
    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0});
        }
    }

    // These functions are the same as movePlayer right and left respectively,
    // but I wanted to add them for a possible mobile version.
    // Having designated buttons for moving left and right will help with accessibility.

    // MOVE BLOCK RIGHT
    const moveRight = () => {
        if (!checkCollision(player, stage, { x: 1, y: 0 })) {
            updatePlayerPos({ x: 1, y: 0});
        }
    }

    // MOVE BLOCK LEFT
    const moveLeft = () => {
        if (!checkCollision(player, stage, { x: -1, y: 0 })) {
            updatePlayerPos({ x: -1, y: 0});
        }
    }

    // These functions are responsible for rotating the Tetrominos.
    // They will serve as functions for the future mobile mode.

    // ROTATE BLOCK RIGHT
    const rotateRight = () => {
        playerRotate(stage, 1)
    }

    // ROTATE BLOCK LEFT
    const rotateLeft = () => {
        playerRotate(stage, -1)
    }

    // DROPPING BLOCKS UNDER RIGHT CONDITIONS
    const drop = () => {
        // increase level when player has cleared rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Increase speed
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, { x: 0, y: 1})) {
            updatePlayerPos({ x: 0, y: 1, collided: false})
        } else {
            // Game Over
            if (player.pos.y < 1) {
                console.log("Game Over");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    // DROPPING BLOCKS
    const dropPlayer = () => {
        setDropTime(null);
        drop();
        setDropTime(1000 / (level + 1) + 200);
    }

    useInterval(() => {
        drop();
    }, dropTime)

    // The following is a function for Hard Drops, a staple of Tetris.
    // Hard drops save time on making moves by immediately dropping the block to the bottom.

    // HARD DROP OF BLOCKS
    const hardDrop = () => {
        let pot = 0;
        while (!checkCollision(player, stage, { x: 0, y: pot })) {
           setDropTime((1000 / (level + 1) + 200) * 5);
           pot += 1;
        }
        updatePlayerPos({ x: 0, y: pot-1, collided: true });
        setDropTime(1000 / (level + 1) + 200);
     }

     const pause = () => {
        //  need to stop movement entirely
        console.log("paused");
        setDropTime(null);
        // need to stop movement entirely as well
        if (movePlayer(1) || movePlayer(-1)) {
            console.log("move")
            setDropTime(1000 / (level + 1) + 200);
        }
     }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37 || keyCode === 65) {
                movePlayer(-1);
                // move tetromino left one unit (keyCode for 37 is left arrow key)
            } else if (keyCode === 39 || keyCode === 68) {
                movePlayer(1);
                // move tetromino right one unit (keyCode for 39 is right arrow key)
            } else if (keyCode === 40 || keyCode === 83) {
                dropPlayer();
                // drop tetromino down one unit (keyCode for 40 is down arrow key)
            } else if (keyCode === 38 || keyCode === 87) {
                hardDrop();
            } else if (keyCode === 16 || keyCode === 81) {
                playerRotate(stage, 1);
            }  else if (keyCode === 191 || keyCode === 69) {
                playerRotate(stage, -1);
            } else if (keyCode === 27) {
                pause();
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <h1>React Tetris</h1>
            <StyledTetris>
                <div>
                    <Stage stage={stage}/>
                    <StyledButtons>
                        <div>
                            <StyledDPad onClick={hardDrop}>▲</StyledDPad>
                            <div>
                                <StyledDPad onClick={moveLeft}>◄</StyledDPad>
                                <StyledDPad>♦</StyledDPad>
                                <StyledDPad onClick={moveRight}>►</StyledDPad>
                            </div>
                            <StyledDPad onClick={drop}>▼</StyledDPad>
                        </div>
                        <div>
                            <StyledFace onClick={rotateLeft}>B</StyledFace>
                            <StyledFace onClick={rotateRight}>A</StyledFace>
                        </div>
                    </StyledButtons>
                </div>
                <aside>
                    <h3>Legend</h3>
                    {
                    gameOver
                        ? (
                            <Display gameOver={gameOver} text="Game Over"/>
                        )
                        : (
                            <div>
                                <NextBlock preview={preview}/>
                                <Display text={`Score: ${score}`}/>
                                <Display text={`Rows: ${rows}`}/>
                                <Display text={`Level: ${level + 1}`}/>
                            </div>
                        )
                    }
                    <StartButton callback={startGame}/>

                </aside>
                <Controls/>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;