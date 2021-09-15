import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, rgb(0, 0, 126), rgb(39, 0, 39));
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
        height: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }

    @media only screen and (max-width: 1050px) {
        display: flex;
        height: 100%;
        justify-content: none;
        padding: 0px;
        margin: 0 20px;
    
        aside {
            width: 35%;
            display: block;
            padding: 0px;
            margin-left: 10px;
        }
    }
`

export const StyledButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;
    min-width: 20vw;
    margin: 1px;
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

    @media only screen and (max-width: 1050px) {
        width: 30px;
        height: 30px;
        font-size: 0.5rem;
        padding: 4px;
    }
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

    @media only screen and (max-width: 1050px) {
        width: 33px;
        height: 33px;
        font-size: 0.5rem;
        margin: 0 3px;
        padding: 4px;
    }
`