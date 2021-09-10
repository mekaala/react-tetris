import styled from 'styled-components';
import bgImage from '../../images/meteor.JPG'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, black, rgb(39, 0, 39), rgb(0, 0, 126));
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    overflow: hidden;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`