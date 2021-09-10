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
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`