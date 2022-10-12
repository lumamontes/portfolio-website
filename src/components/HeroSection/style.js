import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%;
    min-height: 85vh;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem 2rem 2rem;
    flex-wrap: wrap;

    img {
        width: 22.5rem;
        height: 25rem;
        -webkit-box-shadow: 1.25rem 1rem 0px -1rem #FF4E79; 
        box-shadow: 1.25rem 1.25rem 0px -0.75rem #FF4E79;
    }

    @media only screen and (max-width: 958px) {
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

`
export const TextContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 2rem;
    max-width: 500px;
    h1{
        padding-top: 1.75rem;
        font-size: 3rem;
    }

    span {
        color: #4b59f7
    }
    
    @media only screen and (max-width: 958px) {
        justify-content: center;
        align-items: center;
        font-size: 1.24rem;
        h1{
            font-size: 2.5rem;
        }
    
    }

`