import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem 1rem 2rem;
    flex-wrap: wrap ;
    img {
        -webkit-box-shadow: 1.25rem 1rem 0px -1rem #FF4E79; 
        box-shadow: 1.25rem 1.25rem 0px -0.75rem #FF4E79;
    }

`


export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.75rem;
    max-width: 500px;
    h1{
        font-size: 3rem;
    }
    
    span {
        color: #0029FF
    }


`