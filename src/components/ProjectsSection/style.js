import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.section`
    width: 95vw;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
    h2 {
        font-size: 3rem;
        color: #0029FF;
        align-self: center;
        margin: 5rem 0;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        gap: 2.75rem;
    }
`
export const ProjectContainer = styled.div`
        display: flex;
        align-items: center;
`
export const ProjectCard = styled.article`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #1E1E1E;
        width: 270px;
        height: 307px;
        border-radius: 8px;
        border-top: 5px solid #FF4E79;
    
    img {
        width: 100%;
        height: 80%;
        padding: 1rem 1.25rem;
        object-fit: cover;
        border-bottom: 1px solid #292929;
    }
   
`

export const NavWrapper = styled.div`
    display: flex;
    height: 20%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1.25rem;
    gap: 1.25rem;
`
export const NavLink = styled.a`
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    transition: color 300ms;
    &:hover{
        color: #FF4E79;
    }
`
export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    h3 {
        align-self: center;
    }
    div {
        width: 268px;
        height: 88px;
        margin-left: -15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25px); 
        border: 1px solid black;
        background-color: #282827;
        display: flex;
        align-items: center;
        text-align: center;
    }

`