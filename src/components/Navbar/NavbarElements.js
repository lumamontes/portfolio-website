import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    height: 15vh;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    /* position: sticky; */
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1400px;
`

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`
export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.25rem;
    height: 100%;
    font-weight: bold;
    cursor: pointer;

    &active{
        border-bottom: 3px solid #FF4E79;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;

    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 6px;
    background: transparent;
    white-space: nowrap;
    width: 10.75rem;
    padding: 0.625rem 1.5rem;
    color: #FF4E79;
    outline: none;
    border: 1px solid #FF4E79;
    cursor: pointer;
    text-decoration: none;
    transition: background 300ms;

    &:hover{
        background: #FF4E79;
        color: #fff;
    }
`