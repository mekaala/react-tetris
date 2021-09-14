import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, rgb(0, 0, 126), rgb(39, 0, 39));
    // animation: gradient 15s ease infinite;
    background-size: 200% 200%;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`

export const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: fit-content(30%) fit-content(30%) fit-content(30%);
    // margin-left: 165px;
    column-gap: 5px;
    min-width: 300px;
`

export const StyledControl = styled.button`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 10px;
    min-height: 30px;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.7rem;
    outline: none;
    cursor: pointer;
`