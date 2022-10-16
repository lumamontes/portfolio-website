import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    background: #1B1B1B;

    span {
        color: #FF4E79;
    } 
    & + p{
        color: #7B7B7B;
    }

`
export const SideBarContent = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.25rem;
    }
`

export const NavLink = styled.a`
    color: #fff;
    font-weight: bold;
    font-size: 1.75rem;
    transition: color 300ms;
    cursor: pointer;
    &:hover{
        color: #FF4E79;
    }
`