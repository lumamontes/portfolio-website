import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    width: 5%;
    height: 100vh;
    position: fixed;
    font-size: 1.5rem;
    top: 0;
    left: 0;
    z-index: 20;
    
    @media screen and (max-width: 768px){
        display: none;
    }


`

export const NavbarContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

`
export const VerticalLine = styled.div`
 border-left: 2px solid white;
  height: 13.625rem;
`
export const NavLink = styled(LinkS)`
    color: #fff;
    font-weight: bold;
    transition: background 300ms;
    & {
        padding-bottom: 1.25rem;
    }
    &:hover{
        background: #FF4E79;
        color: #fff;
    }
`