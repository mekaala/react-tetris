import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(18vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 18vw;
    background: #002700;
    margin: auto;
    margin-bottom: 20px;
    
    @media only screen and (max-width: 1050px) {
        display: grid;
        max-width: 60vw;
        grid-template-rows: repeat(
            ${props => props.height},
            calc(60vw / ${props => props.width})
        );
        grid-template-columns: repeat(${props => props.width}, 1fr);
        margin-bottom: 30px;
    }
    @media only screen and (max-width: 330px) {
        display: grid;
        max-width: 45vw;
        grid-template-rows: repeat(
            ${props => props.height},
            calc(45vw / ${props => props.width})
        );
        grid-template-columns: repeat(${props => props.width}, 1fr);
        margin: 0;
        margin-bottom: 15px;
    }
`