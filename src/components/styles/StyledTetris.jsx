import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, rgb(0, 0, 126), rgb(39, 0, 39));
    background-size: 200% 200%;
    overflow: hidden;

    @media only screen and (max-width: 1050px) {
        height: 87vh;
    }
    @media only screen and (max-width: 330px) {
        height: 86vh;
    }
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
            width: 60%;
            height: 44%;
            display: block;
            padding: 0px;
            margin-left: 15px;
        }

        @media only screen and (max-width: 330px) {
            aside {
                width: 75%;
                height: 44%;
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

    @media only screen and (max-width: 1050px) {
        margin: 0 -130px 0 0;
    }
    @media only screen and (max-width: 330px) {
        margin: 0 -120px 0 0;
    }
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
        width: 50px;
        height: 50px;
        // font-size: 0.5rem;
        padding: 4px;
    }
    @media only screen and (max-width: 330px) {
        width: 40px;
        height: 40px;
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
        width: 60px;
        height: 60px;
        border-radius: 40px;
        margin: 0 6px;
        padding: 4px;
    }
    @media only screen and (max-width: 330px) {
        width: 45px;
        height: 45px;
        // font-size: 0.5rem;
        margin: 0 6px;
        padding: 4px;
    }
`