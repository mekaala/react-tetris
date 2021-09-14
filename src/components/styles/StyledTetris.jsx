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
    display: flex;
    align-items: center;
    justify-content: space-around;
    column-gap: 5px;
    min-width: 20vw;
    margin: 10px auto;
`

export const StyledDPad = styled.button`
    box-sizing: border-box;
    padding: 12px;
    width: 37px;
    height: 37px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    // font-size: 0.7rem;
    cursor: pointer;
`

export const StyledFace = styled.button`
    box-sizing: border-box;
    margin: 0 10px;
    padding: 12px;
    width: 37px;
    height: 37px;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    // font-size: 0.7rem;
    outline: none;
    cursor: pointer;
`