import styled from 'styled-components';

export const Container = styled.div`
    width: 95vw;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.25rem;
    flex-wrap: wrap;

    @media only screen and (max-width: 958px) {
        justify-content: center;
        align-items: center;
        gap: 1.25rem;
    }
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 500px;
    gap: 1.25rem;

    h2 {
        font-size: 3rem;
        color: #0029FF;
    }

    p {
        font-size: 1.1rem;
        line-height: 26px;
        text-align: justify;
    }

    @media only screen and (max-width: 958px) {
        align-items: center;
    }
`


export const AboutImagesContent = styled.div`

`
